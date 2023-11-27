function updateReview(poster){

    document.getElementById('reviewposter').src = poster.src;
    document.getElementById('movietitle').innerHTML = poster.alt;

    switch (poster.alt){
        case "Harry Potter and the Prisoner of Azkaban":
            document.getElementById('review').innerHTML = "This is one of the first movies I remember watching when I was young. I've always loved Harry Potter, and this movie has always been the most entertaining and magical to be, with big revelations and themes that would be explored in the future as well.";
            break;
        case "A Silent Voice":
            document.getElementById('review').innerHTML = "More than liking it as a love story, what I adored was watching the protagonist slowly be able to heal his relationships and open up to people again. The movie contains both drama and comedy, and the ending is truly one of the most beautiful I've ever seen.";
            break;
        case "Beauty and the Beast":
            document.getElementById('review').innerHTML = "I remember watching this movie on a VHS that my grandma owned, and that I watched it a lot of times. The animation still looks gorgeous nowadays and the music is amazing. I'm also a sucker for romance, so this story was truly beautiful to me.";
            break;
        case "In the Heights":
            document.getElementById('review').innerHTML = "Having lived in a Latin American country all my life, watching this movie felt so familiar and warm. The songs and choreography were spectacular, and although some changes from the source material bothered me a little, the movie as a whole is so good that I can look past that.";
            break;
        case "tick, tick... BOOM!":
            document.getElementById('review').innerHTML = "I had no previous knowledge of this movie or the person it's based on, but it was a delight from beginning to end. The acting is marvelous, you can feel so many things just by watching the character interact with each other. They are all so talented and the songs are amazing as well. One of the last songs is extremely emotional and makes me want to cry every time I listen to it.";
            break;
        case "Luca":
            document.getElementById('review').innerHTML = "This was probably my most expected movie of 2021, and I was very sad that it didn't release in theaters. It is a simple film, but I really love the friendship story it tells. It reminded me of the time I spent with my best friend throughout college, which are some of my most precious memories.";
            break;
        case "Eternals":
            document.getElementById('review').innerHTML = "Hated by many, this quickly became one of my favourites since the first time I watched it. It has a bigger-than-average cast, which might not allow the movie to truly develop all of them equally, but each of them is still enjoyable in their own way. I truly hope they come back in a future project, because I don't think I've had enough of them.";
            break;
        case "Black Panther":
            document.getElementById('review').innerHTML = "My favourite superhero ever finally got a movie in 2018 and I loved it with all my heart. Although the character had already appeared in a previous movie, here he is able to be fleshed out, and we can see both his strengths and struggles perfectly. It's very sad that his story was cut short, but his legacy will always be remembered.";
            break;
        default:
            document.getElementById('review').innerHTML = "No movie has been selected.";
    }
}