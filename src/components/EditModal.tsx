import {Modal, Button, Form, Spinner, Alert} from "react-bootstrap";
import {DataProps} from "../hooks/useFetch.tsx";
import React, {useRef, useState} from "react";

type Props = {
    post: DataProps
    show: boolean
    handleHide: () => void
    handleSave: (post: DataProps) => void
}

const EditModal: React.FC<Props> = ({post, handleHide, handleSave, show= false}) => {
    const inputRef = useRef<HTMLInputElement|null>(null)
    const textAreRef = useRef<HTMLTextAreaElement|null>(null)
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<string>('')

    const handleSaveChanges = () => {
        setLoading(true)

        fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}`, {
            method: 'PUT',
            body: JSON.stringify({
                title: inputRef.current?.value,
                body: textAreRef.current?.value
            })
        })
            .then(res => res.json())
            .then(() => {
                post.title = inputRef.current!.value
                post.body = textAreRef.current!.value

                handleSave(post)
                handleHide()
            })
            .catch(e => setError(e.toString()))
            .finally(() => setLoading(false))
    }

    return <Modal
        show={show}
        onHide={handleHide}
        size="lg"
    >
        <Modal.Header closeButton>
            <Modal.Title>Edit post</Modal.Title>
        </Modal.Header>

        <Modal.Body>
            {error && <Alert variant="danger" className="mb-3">
                {error}
            </Alert>}

            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" ref={inputRef} defaultValue={post.title} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Body</Form.Label>
                    <Form.Control as="textarea" rows={4} ref={textAreRef} defaultValue={post.body} />
                </Form.Group>
            </Form>
        </Modal.Body>

        <Modal.Footer>
            <Button variant="secondary" onClick={handleHide}>Close</Button>
            <Button variant="primary" onClick={handleSaveChanges}>
                {!loading && 'Save changes'}
                {loading && <Spinner animation="border" size="sm" />}
            </Button>
        </Modal.Footer>
    </Modal>
}

export default EditModal
