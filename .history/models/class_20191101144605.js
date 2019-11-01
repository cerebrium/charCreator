const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema ({
    header: String,
    content: String,
    date: Date,
}, {
    timestamps: true
})

const blogPostSchema = new mongoose.Schema({
    title: String,
    body: String,
    comments: [commentSchema]
}, {
    timestamps: true
}) 

module.exports = mongoose.model('BlogPost', blogPostSchema);


// Usage examples
// make a new blog post document
const newPost = new BlogPost({title: 'Cat', body: 'Yeeeeeeehawwwwwww, sandos'});

// push a new comment object into its comments
newPost.comments.push({header: 'My Comment', content: 'awesome'});
// save that recond with all its comments
newPost.save( (err) => {
    console.log('post saved')
})

// Access one given subdocument by ID
newPost.comments.id(subDocId).remove();
newPost.save( (err) => {
    console.log('post edited')
})




// const mongoose = require('mongoose');

// const skillSchema = new mongoose.Schema ({
//     name: String,
//     damage: Number,
//     healing: Number,
//     type: String,
// }, {
//     timestamps: true
// });

// const classSchema = new mongoose.Schema ({
//     name: String,
//     faction: String,
//     skills: [skillSchema],
// }, {
//     timestamps: true
// })

// module.exports = mongoose.model('ClassName', classSchema);

// const newClass = new ClassName({name: 'Druid', faction: 'Horde'});

// newClass.skills.push({name: 'Ferocious Bite', damage: 15, healing: 0, type: 'Cat Form'}, {name: 'Feral Swipe', healing: 0, damage: 10, type: 'Bear Form'}, {name: 'Rejuvination', damage: 0, healing: 15, type: 'Tree Form'})

// newClass.save( (err) => {
//     console.log('Druid made')
// })