import React, { Component } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

class Home extends Component{
    constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
        this.state = {
            blogs: []
        };
    }

    componentDidMount() {
        axios.get('http://localhost/Blog-api/view-blog.php')
        .then(({data}) => {
            if(data.success === 1) {
                this.setState({
                    blogs: data.blogs.reverse()
                })
            }
        })
        .catch(error => {
            console.log(error);
        })
    }

    render() {
        const viewBlog = this.state.blogs.map((blog) => {
            return(
                <div className = "card">
                    <div className = "card-header">
                        Posted at { blog.createdAt }
                    </div>
                    <div className = "card-body">
                        <h5 className = "card-title">Student Name :- { blog.name }</h5>
                        <p class="card-text">{ blog.wish }</p>
                    </div>
                </div>
            );
        });
        return(
            <div className = "container">
                { viewBlog }
            </div>
        );
    }
}

export default Home;
