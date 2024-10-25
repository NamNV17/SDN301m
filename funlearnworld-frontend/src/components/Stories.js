import React from 'react';
import { Typography, Box, Paper, Button, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';


function Stories() {
  const navigate = useNavigate();

  const handleSelectStory = (storyId) => {
    navigate(`/story/${storyId}`);
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom align="center" sx={{ mb: 4 }}>
        Câu chuyện tương tác
      </Typography>

      <Grid container spacing={4}>
        {/* Câu chuyện "Adventure in the Forest" */}
        <Grid item xs={12} md={4}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Box sx={{ textAlign: 'center' }}>
              <img src={"https://png.pngtree.com/thumb_back/fh260/background/20230703/pngtree-forest-adventure-3d-illustration-of-cartoon-car-image_3737178.jpg"} alt="Adventure in the Forest" style={{ width: '100%', borderRadius: '8px' }} />
              <Typography variant="h6" sx={{ mt: 2 }}>Chuyến phiêu lưu trong rừng</Typography>
              <Typography variant="body1" sx={{ mt: 1 }}>
                Cùng các bạn động vật khám phá khu rừng bí ẩn! Bạn sẽ quyết định xem họ sẽ làm gì trong những tình huống khác nhau.
              </Typography>
              <Typography variant="body2" sx={{ mt: 1, color: 'gray' }}>
                Song ngữ: "If you choose to follow the light, you'll meet a new friend in the forest!" / "Nếu bạn chọn đi theo ánh sáng, bạn sẽ gặp được một người bạn mới trong rừng!"
              </Typography>
              <Button 
                variant="contained" 
                color="primary" 
                onClick={() => handleSelectStory('forest')} 
                sx={{ mt: 2 }}
              >
                Bắt đầu câu chuyện
              </Button>
            </Box>
          </Paper>
        </Grid>

        {/* Câu chuyện "Around the World" */}
        <Grid item xs={12} md={4}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Box sx={{ textAlign: 'center' }}>
              <img src={"https://png.pngtree.com/thumb_back/fh260/back_our/20190621/ourmid/pngtree-dream-trip-to-the-world-background-template-image_204538.jpg"} alt="Around the World" style={{ width: '100%', borderRadius: '8px' }} />
              <Typography variant="h6" sx={{ mt: 2 }}>Vòng quanh thế giới</Typography>
              <Typography variant="body1" sx={{ mt: 1 }}>
                Hãy cùng du hành đến các quốc gia nói tiếng Anh và học từ vựng qua các nền văn hóa thú vị!
              </Typography>
              <Typography variant="body2" sx={{ mt: 1, color: 'gray' }}>
                Song ngữ: "In England, learn about traditional foods!" / "Tại Anh, bạn sẽ tìm hiểu về các món ăn đặc trưng!"
              </Typography>
              <Button 
                variant="contained" 
                color="primary" 
                onClick={() => handleSelectStory('world')} 
                sx={{ mt: 2 }}
              >
                Bắt đầu câu chuyện
              </Button>
            </Box>
          </Paper>
        </Grid>

        {/* Câu chuyện "Mystery of the Hidden Cave" */}
        <Grid item xs={12} md={4}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Box sx={{ textAlign: 'center' }}>
              <img src={"https://png.pngtree.com/png-vector/20220617/ourmid/pngtree-inside-the-mystery-cave-and-treasure-clip-horror-scary-vector-png-image_37076484.jpg"} alt="Mystery of the Hidden Cave" style={{ width: '100%', borderRadius: '8px' }} />
              <Typography variant="h6" sx={{ mt: 2 }}>Bí ẩn hang động</Typography>
              <Typography variant="body1" sx={{ mt: 1 }}>
                Khám phá bí ẩn của hang động sâu trong rừng! Bạn sẽ quyết định các bước tiếp theo trong hành trình đầy thử thách này.
              </Typography>
              <Typography variant="body2" sx={{ mt: 1, color: 'gray' }}>
                Song ngữ: "Find clues to solve the mystery!" / "Tìm manh mối để giải mã bí ẩn!"
              </Typography>
              <Button 
                variant="contained" 
                color="primary" 
                onClick={() => handleSelectStory('mystery')} 
                sx={{ mt: 2 }}
              >
                Bắt đầu câu chuyện
              </Button>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Stories;
