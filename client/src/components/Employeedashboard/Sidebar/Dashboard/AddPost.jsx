import React, { useState } from 'react';
import { Button, Typography, InputBase, Box, Divider, IconButton } from '@mui/material';
import { EmojiEmotions, Attachment, Mic, MoreHoriz } from '@mui/icons-material';
import axios from 'axios';
import {
    EditOutlined,
    CameraAltOutlined,
    DeleteOutlined,

} from "@mui/icons-material";
import useTheme from '@mui/material/styles/useTheme';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dropzone from "react-dropzone";
import { ref, getDownloadURL, uploadBytes } from "firebase/storage";
import { storage } from "../../../firebase";
const employeeId = localStorage.getItem("employeeid");

const AddPost = ({ profilePhotoURL, employeeName, designation }) => {
    const { palette } = useTheme();
    const [showDropzone, setShowDropzone] = useState(false);

    const [image, setImage] = useState(null);
    const [post, setPost] = useState({
        name: "",
        description: "",
        picturePath: "",
        profilePhotoURL: profilePhotoURL,
        designation: designation,
        employeeName: employeeName
    });


    const handleCameraClick = () => {
        setShowDropzone(!showDropzone);
    };
    const handleChange = (e) => {
        const { name, value } = e.target;
        setPost({ ...post, [name]: value });
    };



    const handlePostSubmit = async (e) => {
        e.preventDefault();

        try {
            if (image) {

                const fileName = `${Date.now()}_${image.name}`;
                const storageRef = ref(
                    storage,
                    `Socialimages/${fileName}`
                );

                // Upload the image using uploadBytes
                await uploadBytes(storageRef, image);

                // Get the download URL
                const downloadURL = await getDownloadURL(storageRef);

                // Send the post data, including the Firebase Storage URL, to your server
                const response = await axios.post("http://localhost:8080/api/createposts", {
                    ...post,
                    employeeid: employeeId,
                    picturePath: downloadURL,
                    profilePhotoURL: profilePhotoURL,
                    designation: designation,
                    employeeName: employeeName
                });


                //  Reset the form or perform any other actions
                setPost((prevState) => ({
                    ...prevState,
                    description: "",
                }));
                setShowDropzone(false)

                setImage(null);
                toast.success("Post created successfully!");
            } else {
                // Handle case where no image is selected
                console.error("Please select an image to upload.");
            }
        } catch (error) {
            console.error("Error uploading image to Firebase or creating post:", error);
            toast.error("Post failed!");
        }
    };

    return (
        <Box
            border="1px solid #ddd"
            borderRadius="5px"
            padding="16px"
            margin="16px"
            width="900px"
            display="flex"
            flexDirection="column"
            alignItems="flex-start"
            background="#fff"
            boxShadow="0 2px 4px rgba(0, 0, 0, 0.1)"
        >
            <Box display="flex" alignItems="center" marginBottom="16px">
                <img
                    src={profilePhotoURL}
                    alt="User Profile"
                    style={{
                        borderRadius: '50%',
                        marginRight: '12px',
                        width: '40px',
                        height: '40px',
                    }}
                />
                <div>
                    <Typography variant="h6" style={{ margin: '0', fontSize: '18px' }}>
                        {employeeName}
                    </Typography>
                    <Typography style={{ margin: '0', fontSize: '14px', color: '#555' }}>
                        {designation}
                    </Typography>
                </div>
            </Box>
            <InputBase
                placeholder="What's on your mind..."
                name="description"
                value={post.description}
                onChange={handleChange}
                style={{
                    width: '100%',
                    backgroundColor: '#f0f2f5',
                    borderRadius: '2rem',
                    padding: '1rem 2rem',
                    marginBottom: '16px',
                }}
            />

            {showDropzone && (
                <Box
                    border={`1px solid `}
                    borderRadius="5px"
                    mt="1rem"
                    p="1rem"
                    // maxWidthwidth="100%"
                    width={"850px"}
                >
                    <Dropzone
                        acceptedFiles=".jpg,.jpeg,.png"
                        multiple={false}
                        onDrop={(acceptedFiles) => setImage(acceptedFiles[0])}
                    >
                        {({ getRootProps, getInputProps }) => (
                            <div>
                                <Box
                                    {...getRootProps()}
                                    border={`2px dashed ${palette.primary.main}`}
                                    p="1rem"
                                    // maxWidthwidth="100%"
                                    width={"800px"}
                                    sx={{ "&:hover": { cursor: "pointer" } }}
                                >
                                    <input {...getInputProps()} />
                                    {!image ? (
                                        <p>Add Image Here</p>
                                    ) : (
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                            <Typography>{image.name}</Typography>
                                            <IconButton
                                                onClick={() => setImage(null)}
                                                sx={{ width: "15%" }}
                                            >
                                                <EditOutlined />
                                            </IconButton>
                                            <IconButton
                                                onClick={() => setImage(null)}
                                                sx={{ width: "15%" }}
                                            >
                                                <DeleteOutlined />
                                            </IconButton>


                                        </div>
                                    )}
                                </Box>


                            </div>
                        )}
                    </Dropzone>

                </Box>
            )}
            <Box display="flex" justifyContent="space-between" alignItems="center" >
                <IconButton onClick={handleCameraClick}>
                    {showDropzone ? <CameraAltOutlined style={{ color: '#0073b1' }} /> : <CameraAltOutlined style={{ color: '#0073b1' }} />}
                </IconButton>
                <Typography style={{ fontSize: '16px', color: '#0073b1', cursor: 'pointer' }}>Post Image</Typography>
            </Box>

            <Divider style={{ marginBottom: '16px' }} />
            <Box display="flex" justifyContent="space-between" alignItems="center" width="100%">
                <Box display="flex" alignItems="center">
                    <IconButton>
                        <EmojiEmotions style={{ color: '#0073b1' }} />
                    </IconButton>
                    <Typography style={{ fontSize: '16px', color: '#0073b1', cursor: 'pointer' }}>Feeling/Activity</Typography>
                </Box>
                <Box display="flex" alignItems="center">
                    <IconButton>
                        <Attachment style={{ color: '#0073b1' }} />
                    </IconButton>
                    <Typography style={{ fontSize: '16px', color: '#0073b1', cursor: 'pointer' }}>Attach a file</Typography>
                </Box>
                <Box display="flex" alignItems="center">
                    <IconButton>
                        <Mic style={{ color: '#0073b1' }} />
                    </IconButton>
                    <Typography style={{ fontSize: '16px', color: '#0073b1', cursor: 'pointer' }}>Record Audio</Typography>
                </Box>
                <IconButton>
                    <MoreHoriz style={{ color: '#0073b1' }} />
                </IconButton>
            </Box>
            <Button
                disabled={!post.description}
                onClick={handlePostSubmit}
                style={{
                    color: post.description ? '#fff' : 'black', 
                    backgroundColor: '#0073b1',
                    borderRadius: '3rem',
                    marginTop: '16px',
                    width: '100%',
                }}
            >
                POST
            </Button>
        </Box>
    );
};

export default AddPost;

