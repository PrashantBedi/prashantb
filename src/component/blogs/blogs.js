import {Box, Card, CardContent, CardMedia, Grid, Pagination, Typography} from "@mui/material";
import {MAX_BLOGS_PER_PAGE} from "../../constants";
import changePage from "./hooks/onPageClick"

const blogs = ["What is Gravity?", "Newtons law of Gravity", "Whats theory of Relativity?", "Golang", "Nano"]

const Blogs = () => {
    const {pageNumber, onPageChange} = changePage()

    return (
        <Box
            width="60%"
        >
            <Grid
                container
                direction="row"
                justifyContent="space-evenly"
                alignItems="center"
            >
                {
                    blogs.filter((blogs, index) => {
                            if (index >= MAX_BLOGS_PER_PAGE * (pageNumber - 1) && index < (MAX_BLOGS_PER_PAGE * pageNumber)) {
                                return blogs
                            }
                            return null
                        }
                    ).map((blog, index) =>
                        <Card
                            id={index}
                            sx={{
                                margin: "2%",
                                width: "40%",
                                boxShadow: '7px 7px 12px grey'
                            }}
                        >
                            <CardMedia
                                src="data:image/jpeg;base64,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" component="img"
                            />
                            <CardContent>
                                <Typography fontWeight="bold" variant="h6" id={index} style={{width: "90%"}} fontFamily="Lato"  color="secondary" noWrap>
                                    {blog}
                                </Typography>
                                <Typography gutterBottom fontSize="10" variant="body2" style={{width: "90%"}} fontFamily="Lato" color="secondary" noWrap>
                                    Small desciption about my blog lorem
                                </Typography>
                            </CardContent>
                        </Card>
                    )
                }
            </Grid>
            <Grid
                container
                direction="row"
                justifyContent="space-evenly"
                alignItems="flex-end"
            >
                <Pagination
                    count={Math.ceil(blogs.length / 4)}
                    color="primary"
                    onChange={onPageChange}
                />
            </Grid>
        </Box>
    )
}

export default Blogs