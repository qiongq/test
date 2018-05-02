//路由
import AddBlog from "./components/AddBlog"
import ShowBlogs from "./components/ShowBlogs"
import SingleBlog from "./components/SingleBlog"

export default [
    { path: '/', component: ShowBlogs },
    { path: '/add', component: AddBlog },
    { path: '/blog/:id', component: SingleBlog }
]