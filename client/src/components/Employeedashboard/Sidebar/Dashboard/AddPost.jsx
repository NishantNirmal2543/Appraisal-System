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

import Dropzone from "react-dropzone";

const employeeId = localStorage.getItem("employeeid");

const AddPost = ({ profilePhotoURL, employeeName, designation }) => {
    const { palette } = useTheme();
    const [showDropzone, setShowDropzone] = useState(false); // Track whether to show the Dropzone

    const [image, setImage] = useState(null);
    const [post, setPost] = useState({
        name: "",
        description: "",
        picturePath: "",
        profilePhotoURL: "",
    });


    const handleCameraClick = () => {
        // Show the Dropzone when the camera button is clicked
        setShowDropzone(!showDropzone);
    };
    const handleChange = (e) => {
        const { name, value } = e.target;
        setPost({ ...post, [name]: value });
    };


    const handlePostSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("http://localhost:8080/api/createposts", {
                ...post,
                employeeid: employeeId,
            });


            setPost({

                description: "",
                // picturePath: "",

            });

        } catch (error) {
            console.error("Error creating post:", error);

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
                disabled={!post}
                onClick={handlePostSubmit}

                style={{
                    color: '#fff',
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

