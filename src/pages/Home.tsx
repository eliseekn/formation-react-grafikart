import useFetch, {DataProps} from "../hooks/useFetch.tsx";
import {Alert, Spinner, Card, Button, Row, Col} from "react-bootstrap";

const Home = () => {
    document.title = 'Home'
    const {data, loading, error} = useFetch('https://jsonplaceholder.typicode.com/posts?_limit=20')
    const posts = data as DataProps[]

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

    return <Row md={3} className="row-gap-4 mt-3">
        {posts.map((post: DataProps) => {
            return (
                <Col key={post.id}>
                    <Card>
                        <Card.Img variant="top" src={`https://picsum.photos/id/${post.id + 20}/500`} />
                        <Card.Body>
                            <Card.Title>{post.title}</Card.Title>
                            <Card.Text>{post.body}</Card.Text>
                            <Button variant="primary" href={`#post-${post.id}`}>Read more</Button>
                        </Card.Body>
                    </Card>
                </Col>
            )
        })}
    </Row>
}

export default Home
