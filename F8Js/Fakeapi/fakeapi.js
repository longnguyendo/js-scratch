const linkAPI = 'http://localhost:3000';

let postsData =[];

const start = () => {

    // getPosts(function(posts) {
    //     renderPosts(posts);
    // });
    // instead of that we can use 
    getPosts(renderPosts);
    handleCreatePost();

}

start();

function getPosts(callback) {
    fetch(`${linkAPI}/posts`)
        .then((res) => {
            let result = res.json();
            return result;
        })
        .then((data) => {
            postsData = data;
            callback(postsData);
        })
        .catch((err) => {
            console.log(err);
        })
} 

function renderPosts(posts){

    let listPostBlock = document.querySelector('#list-posts');

    let html = posts.map((post) => {
        return `<li>
            <h1>${post.title}</h1> 
            <p>${post.views}</p>
            <button onclick="handleDeletePost('${post.id}')">Delete</button>
        </li>`;
    });
    
    listPostBlock.innerHTML = html.join('');
    // addDeleteEventListeners();
}

function handleCreatePost() {
    let createBtn = document.querySelector('#create-post');

    createBtn.onclick = function() {

        let title = document.querySelector('input[name="title"]');
        let views = document.querySelector('input[name="views"]');
        
        let formData = {
            title: title.value, 
            views: views.value   
        }
        console.log(formData);
        createPost(formData, function() {
            title.value='';
            views.value='';
        });

    }
}

function createPost(data, callback) {
    let options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        reload: 'manual',
        body: JSON.stringify(data)
    };

    fetch(`${linkAPI}/posts`, options)
        .then(function(res) {
            return res.json();
        })
        .then((newPost) => {
            postsData.unshift(newPost);
            renderPosts(postsData);
            callback();
        })
        .catch((err) => {
            console.log(err);
        })
}

function handleDeletePost(id) {
    
    if (!confirm('Are you sure you want to delete this post?')) return;
    console.log(id);
    let options = {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json'},
    }
    fetch(linkAPI+'/posts' + '/'+ id, options)
        .then(function(res) {
            res.json();
        })
        .then(function() {
            getPosts(renderPosts);
        })
        .catch((err) => { 
            console.log(err);
            
        })
}