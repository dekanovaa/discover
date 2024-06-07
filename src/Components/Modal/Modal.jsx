import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Navbar from '../Navbar/Navbar';
import { t } from 'i18next';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Modal.css'

export default function Modal() {
  const [state, setState] = React.useState({
    top: false,
    
  
  });
  const [barColor, setBarColor] = React.useState('transparent');

  const handleScroll = () => {

      if (window.scrollY > 100 ) {
        setBarColor('blue');
     
  
      } else {
        setBarColor('transparent');
      }
    };
    React.useEffect(() => {
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
    
      };
    
    }, []);
  const { t, i18n } = useTranslation();
  const language = localStorage.getItem('i18nextLng') || 'en';

  const handleChange = (event) => {
    const selectedLanguage = event.target.value;
    i18n.changeLanguage(selectedLanguage);
    localStorage.setItem('i18nextLng', selectedLanguage); 
  };

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {[
         <Link to="/About_page" className="modal__link" href="#">{t("navbar.link1")}</Link>,
         <Link to="/Project_page" className="modal__link" href="#">{t("navbar.link2")}</Link>,
         <Link to="/News_page" className="modal__link" href="#">{t("navbar.link4")}</Link>,
         <Link to="/Contact_page" className="modal__link" href="#">{t("navbar.link5")}</Link>,
         <div className="modal__box">,
           <a href="https://business.facebook.com/latest/home?asset_id=866538573482797&nav_ref=push"><i className='fa-brands fa-facebook' id="modal__icon" ></i></a>,
         <a href="https://www.instagram.com/discover_invest?igshid=ZDdkNTZiNTM%3D"><i className='fa-brands fa-instagram' id="modal__icon" ></i></a>,
         <a href="https://t.me/discovery_invest"><i className='fa-brands fa-telegram' id="modal__icon" ></i></a>,
         </div>,
        ].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
     
    </Box>
  );

  return (
    <div>
      {['top',].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}><i class={`fa-solid fa-bars ${barColor === 'blue' ? 'link-blue' : 'link-transparent'}`}></i></Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}