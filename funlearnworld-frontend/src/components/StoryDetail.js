import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Typography, Box, Paper, Button } from '@mui/material';

function StoryDetail() {
    const { storyId } = useParams();
    const navigate = useNavigate();

    const getStoryContent = (storyId) => {
        switch (storyId) {
            case 'forest':
                return {
                    title: 'Adventure in the Forest',
                    content: `Join the animals as they explore the dense forest and discover hidden paths! 
  In a vibrant forest filled with towering trees, chirping birds, and sparkling streams, a group of animal friends—Leo the lion, Bella the bunny, and Sam the squirrel—decide to embark on an adventure to uncover the secrets of their home.

  One sunny morning, Leo suggests they explore a part of the forest they have never ventured into before. With excitement in their hearts, the trio sets off on their journey. As they walk, they notice the diverse flora and fauna around them, from colorful wildflowers to buzzing bees.

  Along the way, they come across a mysterious old map that leads to a hidden waterfall. Intrigued, they follow the clues, which take them through twisting paths and over rocky hills. Each clue reveals more about the forest's history and its inhabitants, like the wise old owl who offers them advice and the playful fox who tries to trick them.

  As they navigate the forest, they encounter challenges that test their friendship and problem-solving skills. They help a family of birds find their way back to their nest, work together to cross a bubbling stream, and solve riddles posed by the guardian of the forest.

  Finally, they reach the hidden waterfall, which sparkles like diamonds in the sunlight. They marvel at the beauty of the place and splash around in the cool water. This adventure not only brings them closer together but also teaches them valuable lessons about teamwork, courage, and respect for nature.

  As the sun sets, the friends make their way back home, excited to share their stories with others. They realize that the best adventures are those shared with friends, and they can't wait for their next exploration together.`
                };
            case 'world':
                return {
                    title: 'Around the World',
                    content: `Travel to different countries and learn about cultures, languages, and food! 
      Join Mia, a spirited little girl with a big heart, as she embarks on an exciting journey around the globe. 

      One day, while exploring her grandmother's attic, Mia discovers an old globe. As she spins it, she wishes to visit every country and learn about the unique traditions and delicious cuisines they offer. Suddenly, the globe begins to glow, and she finds herself whisked away to her first destination: Italy!

      In Italy, Mia learns how to make pasta from a cheerful chef, who teaches her the art of rolling dough and creating beautiful shapes. They feast on spaghetti with rich marinara sauce, and Mia can’t help but twirl her fork with joy.

      Next, Mia travels to Japan, where she meets a kind girl named Aiko. Aiko shows Mia how to make sushi and explains the importance of harmony and respect in their culture. They enjoy their sushi together under the cherry blossom trees, surrounded by laughter and friendship.

      As Mia continues her journey, she visits colorful markets in Mexico, dances with children in Brazil during Carnival, and watches the Northern Lights in Norway. Each country offers her new experiences, languages, and flavors, broadening her understanding of the world.

      After her adventure, Mia returns home, her heart full of joy and her mind bursting with knowledge. She realizes that despite the differences, people everywhere share love, kindness, and delicious food. Inspired, she decides to host an international potluck for her friends, sharing everything she has learned.

      Through her travels, Mia discovers that the world is a beautiful tapestry of cultures and traditions, and she can’t wait to explore even more in the future.`
                };
            case 'mystery':
                return {
                    title: 'Mystery of the Hidden Cave',
                    content: `Embark on an adventure to solve the mystery of the hidden cave deep in the mountains. 
    Legend has it that this cave holds ancient secrets and treasures that have been lost for centuries. 
    A group of brave friends, Alex, Mia, and Jake, decide to explore the cave after hearing the stories from the elders of their village.

    As they approach the cave, a sense of excitement and fear fills the air. The entrance is dark and foreboding, but they are determined to uncover the truth. 
    Armed with only their flashlights and a map they found in an old book, the trio ventures inside. The walls are covered in strange markings and the sound of dripping water echoes around them.

    Suddenly, they encounter a series of puzzles that guard the treasures within. They must work together, using their wits and teamwork to solve riddles and unlock the next section of the cave. Each puzzle reveals more about the history of the cave and the people who once inhabited it.

    As they delve deeper, they come face to face with challenges, including narrow passages and a mysterious underground river. They also discover unique cave dwellers who help them along the way, providing clues and teaching them about the cave's environment.

    In the end, not only do they find the treasure, but they also learn valuable lessons about friendship, courage, and the importance of preserving history. The adventure brings them closer together and teaches them to appreciate the wonders of the world around them.`
                };
            default:
                return { title: 'Unknown Story', content: 'This story does not exist.' };
        }
    };

    const story = getStoryContent(storyId);

    return (
        <Box sx={{ p: 3 }}>
            <Paper elevation={3} sx={{ p: 3, mb: 2 }}>
                <Typography variant="h4" gutterBottom>
                    {story.title}
                </Typography>
                <Typography variant="body1" paragraph>
                    {story.content}
                </Typography>
                <Button onClick={() => navigate('/stories')} variant="contained" color="primary">
                    Back to Stories
                </Button>
            </Paper>
        </Box>
    );
}

export default StoryDetail;
