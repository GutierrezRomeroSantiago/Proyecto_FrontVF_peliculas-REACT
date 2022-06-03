import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';

export function Tecno() {
  return (
    <ImageList sx={{ width: 500, height: 450 }}>

        <ImageListItem>
          <img
            src={require('../boot.png')}
            alt=""
          />
              <ImageListItemBar
                  title="Bootstrap"
                  actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                href="https://getbootstrap.com/"
              >
                <InfoIcon />
              </IconButton>
            }
          />
        </ImageListItem>

        <ImageListItem>
          <img
            src={require('../cook.png')}
            alt=""
            loading="lazy"
          />
          <ImageListItemBar
                  title="Universal-Cookies"
                  actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                href="https://www.npmjs.com/package/universal-cookie"
              >
                <InfoIcon />
              </IconButton>
            }
          />
        </ImageListItem>

        <ImageListItem>
          <img
            src={require('../coree.png')}
            alt=""
            loading="lazy"
          />
            <ImageListItemBar
                  title="Material Core"
                  actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                href="https://material-ui.com/"
              >
                <InfoIcon />
              </IconButton>
            }
          />
        </ImageListItem>

        <ImageListItem>
          <img
            src={require('../domrct.png')}
            alt=""
            loading="lazy"
          />
          <ImageListItemBar
                  title="React Router DOM"
                  actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                href="https://v5.reactrouter.com/web/guides/quick-start"
              >
                <InfoIcon />
              </IconButton>
            }
          />
        </ImageListItem>

        <ImageListItem>
          <img
            src={require('../exps.png')}
            alt=""
            loading="lazy"
          />
          <ImageListItemBar
                  title="Express"
                  actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                href="https://expressjs.com/"
              >
                <InfoIcon />
              </IconButton>
            }
          />
        </ImageListItem>

        <ImageListItem>
          <img
            src={require('../fire.png')}
            alt=""
            loading="lazy"
          />
          <ImageListItemBar
                  title="Firebase"
                  actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                href="https://firebase.google.com/"
              >
                <InfoIcon />
              </IconButton>
            }
          />
        </ImageListItem>

        <ImageListItem>
          <img
            src={require('../jss.png')}
            alt=""
            loading="lazy"
          />
          <ImageListItemBar
                  title="JavaScript"
                  actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
              >
                <InfoIcon />
              </IconButton>
            }
          />
        </ImageListItem>

        <ImageListItem>
          <img
            src={require('../mng.png')}
            alt=""
            loading="lazy"
          />
          <ImageListItemBar
                  title="MongoDB"
                  actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                href="https://www.mongodb.com/"
              >
                <InfoIcon />
              </IconButton>
            }
          />
        </ImageListItem>

        <ImageListItem>
          <img
            src={require('../moon.png')}
            alt=""
            loading="lazy"
          />
          <ImageListItemBar
                  title="Mongoose"
                  actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                href="https://mongoosejs.com/"
              >
                <InfoIcon />
              </IconButton>
            }
          />
        </ImageListItem>

        <ImageListItem>
          <img
            src={require('../node.png')}
            alt=""
            loading="lazy"
          />
          <ImageListItemBar
                  title="Node.js"
                  actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                href="https://nodejs.org/en/"
              >
                <InfoIcon />
              </IconButton>
            }
          />
        </ImageListItem>

        <ImageListItem>
          <img
            src={require('../rect.png')}
            alt=""
            loading="lazy"
          />
              <ImageListItemBar
                  title="React"
                  actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                href="https://reactjs.org/"
              >
                <InfoIcon />
              </IconButton>
            }
          />
        </ImageListItem>

        <ImageListItem>
          <img
            src={require('../tmb.png')}
            alt=""
            loading="lazy"
          />
              <ImageListItemBar
                  title="TheMovieDB"
                  actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                href="https://www.themoviedb.org/"
              >
                <InfoIcon />
              </IconButton>
            }
          />
        </ImageListItem>

        <ImageListItem>
          <img
            src={require('../tss.png')}
            alt=""
            loading="lazy"
          />
          <ImageListItemBar
                  title="TypeScript"
                  actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                href="https://www.typescriptlang.org/"
              >
                <InfoIcon />
              </IconButton>
            }
          />
        </ImageListItem>

    </ImageList>
  );
}


