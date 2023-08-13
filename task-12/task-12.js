const posts =[{title: 'POST 1'}, {title: 'POST 2'}];

// function printPosts() {
//     for(let i = 0; i < posts.length; i++) {
//         console.log(`${posts[i].title} ${i + 1} created at ${posts[i].time}`)
//     }
// }

function updateLastUserActivityTime() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const today = new Date();
            const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();  
            resolve(time)
        }, 1000)
    })
}

function createPost() {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            posts.push({title: `POST ${(posts.length) + 1}`});
            resolve();
        }, 1000)
    }) 
}

function deletePost(){
   //complete this function such that it removes the last element from the blog Array and resolves the deleted blog in 1 second timeout
   //If no blog present , it breaks the promise with ERROR (reject) in 1 second timeout
   return new Promise((resolve, reject) => {
       if(posts.length > 0) {
       const deletedPostsObject = posts.pop()
       const postsTitle = deletedPostsObject.title
       resolve(postsTitle)
        }
        else {
            reject("ERROR")
        }
   })
   
}
Promise.all([createPost(), createPost(), updateLastUserActivityTime()])
.then((results) => {
        posts.forEach(element => {
            console.log(element.title)
        });
        console.log(`Last Activity Time - ${results[(results.length) - 1]}`)
})
.then(deletePost)
.then(() => {
    posts.forEach(element => {
        console.log(element.title)
    })
})
.then(updateLastUserActivityTime)
.then(result => {
    console.log(`Last Activity Time - ${result}`)
})