import { Dialog, DialogContent, IconButton, Typography, Box } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

function RightSideModal({ open, onClose, title, titleAction, children, width = '400px' }) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      hideBackdrop
      fullScreen
      PaperProps={{
        sx: {
          position: 'fixed',
          top: '64px', //66 changed to 64
          right: 0,
          // width,
          width: {
      xs: '90%',     // 📱 mobile → full width
      sm: '80%',      // small tablets
      md: width,      // desktop → default 400px or passed prop
    },
          margin: 0,
          padding: 0,
          borderLeft: '1px solid #ddd',
          boxShadow: '-2px 0 8px rgba(0,0,0,0.1)',
          display: 'flex',
          flexDirection: 'column',
          bgcolor: 'white',
          zIndex: (theme) => theme.zIndex.appBar + 2,
        },
      }}
    >
      <DialogContent
        sx={{
          flex: 1,
          overflowY: 'auto',
          p: 2,
          position: 'relative',
        }}
      >
        {/* Close Icon */}
        <IconButton onClick={onClose} sx={{ position: 'absolute', top: 8, right: 8 }}>
          <CloseIcon />
        </IconButton>

        {/* Title Row */}
        {(title || titleAction) && (
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 2 ,mb:{xs:1,md:2}}}>
            {title && (
              <Typography variant="h6" sx={{ fontWeight: 600 ,fontSize:{xs:"15px",md:"24px"} }}>
                {title}
              </Typography>
            )}
            {titleAction && <Box>{titleAction}</Box>}
          </Box>
        )}

        {/* Children Content */}
        {children}
      </DialogContent>
    </Dialog>
  );
}

export default RightSideModal;