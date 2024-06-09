import React, {useState} from "react";
import useFetch, {DataProps} from "../hooks/useFetch.tsx";
import {Alert, Button, Card, Spinner, Stack} from "react-bootstrap";
import EditModal from "../components/EditModal.tsx";

type Props = {
    param: number
}

const Post: React.FC<Props> = ({param}) => {
    const [showModal, setShowModal] = useState<boolean>(false)
    const [success, setSuccess] = useState<string>('')
    const {data, loading, error, setData} = useFetch(`https://jsonplaceholder.typicode.com/posts/${param}`)
    const post = data as DataProps

    document.title = `Post | ${post.title}`

    if (loading) {
        return <div className="text-center mt-3">
            <Spinner animation="border" />
        </div>
    }

    if (error) {
        return <Alert variant="danger" className="mt-3">
            {error}
        </Alert>
    }

    const handleSetIsEditing = () => setShowModal(!showModal)

    const handleOnSave = (post: DataProps) => {
        setData(post)
        setSuccess('Post edited successfully')
    }

    return <>
        {success && <Alert variant="success" className="mb-3">
            {success}
        </Alert>}

        <h1>{post.title}</h1>

        <Card>
            <Card.Img variant="top" src={`https://picsum.photos/id/${post.id + 20}/1000/500`} style={{height: 500}} />
            <Card.Body>
                <Card.Text>{post.body}</Card.Text>
            </Card.Body>
        </Card>

        <div className="d-flex justify-content-between align-items-center mt-4">
            <Button variant="secondary" onClick={handleSetIsEditing}>Edit post</Button>

            <Stack direction="horizontal" gap={3}>
                <Button variant="primary" href={`#post-${post.id - 1}`}>Preview</Button>
                <Button variant="primary" href={`#post-${post.id + 1}`}>
                    {loading && <Spinner animation="border" />}
                    {!loading && 'Next'}
                </Button>
            </Stack>
        </div>

        <EditModal show={showModal} post={post} handleHide={handleSetIsEditing} handleSave={handleOnSave} />
    </>
}

export default Post
