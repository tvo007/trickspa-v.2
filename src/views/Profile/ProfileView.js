import React, { Fragment } from 'react';
// import PropTypes from 'prop-types';
import {
  Avatar,
  Grid,
  Typography,
  Card,
  CardHeader,
  CardContent,
  Divider,
  CardActions,
  Button,
  List,
  ListItem,
  ListItemText,
  ListItemIcon
} from '@material-ui/core';
import GroupIcon from '@material-ui/icons/Group';
import LocalAirportIcon from '@material-ui/icons/LocalAirport';
import { useHistory } from 'react-router-dom';
import PageHeading from '../../components/PageHeading';
import { makeStyles } from '@material-ui/core/styles';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
/**
 * test
 */

const useStyles = makeStyles(theme => ({
  // root: {
  //   [theme.breakpoints.down('sm')]: {
  //     paddingLeft: '1rem'
  //   }
  // },
  mainCard: {
    textAlign: 'center'
  },
  card: {
    marginBottom: '1rem'
  },
  divider: {
    background: 'black'
  },
  subheader: {
    marginTop: '1rem'
  },
  actionWrapper: {
    display: 'flex',
    flexDirection: 'row-reverse',
    marginLeft: '35vw'
  },
  headerButton: {
    color: theme.palette.primary.contrastText,
    marginLeft: '.75rem',
    textTransform: 'capitalize'
  },
  list: {
    '& > *': {
      margin: '1rem 0'
    }
  },
  avatar: {
    position: 'relative',
    top: '3rem',
    backgroundColor: theme.palette.primary.light,
    height: '6rem',
    margin: 'auto',
    width: '6rem',
    zIndex: '10'
  }
}));

// HEADING: Avatar + Username + short bio
// BODY: User's posts or their favorite posts by others, maybe links to their samplers

const ProfileView = ({
  userProfile,
  profileLoading,
  profileError,
  isLoggedIn,
  userInfo,
  isOwner,
  profileLoaded
}) => {
  /**
   *
   */
  const history = useHistory();

  const classes = useStyles();
  return (
    <Grid className={classes.root} container item spacing={2}>
      {userProfile === null || profileLoading ? (
        <Typography>Loading!</Typography>
      ) : profileLoaded ? (
        <Fragment>
          <Grid item xs={12}>
            <Avatar className={classes.avatar}>
              {`${userProfile.first_name[0]}${userProfile.last_name[0]}`}
            </Avatar>
            <Card className={classes.mainCard}>
              <CardActions className={classes.actionWrapper}>
                {isLoggedIn && isOwner ? (
                  <Button
                    className={classes.headerButton}
                    color="primary"
                    onClick={e => history.push('/settings')}
                    size="small"
                    variant="contained">
                    Edit Profile
                  </Button>
                ) : null}
                <Button style={{ color: 'grey' }}>
                  <MoreHorizIcon />
                </Button>
              </CardActions>
              <CardHeader
                subheader={
                  <Typography className={classes.subheader}>
                    {userProfile.bio}
                  </Typography>
                }
                title={
                  <PageHeading
                    title={
                      userProfile
                        ? `${userProfile.first_name} ${userProfile.last_name}`
                        : null
                    }
                  />
                }
              />

              <CardContent>
                <Typography variant="body1">TRICKING ALIAS</Typography>
                <Typography variant="body1">LOCATION</Typography>
                <Typography variant="body1">Date of User Creation</Typography>
                <Typography variant="body1">Insta</Typography>
                <Typography variant="body1">Twitter</Typography>
                <Typography variant="body1">TikTok</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item sm={4} xs={12}>
            <Card className={classes.card}>
              <CardHeader title={<Typography variant="h4">Orgs</Typography>} />
              <Divider />
              <CardContent className={classes.list}>
                <List aria-label="organizations">
                  {Array(5)
                    .fill()
                    .map(() => (
                      <ListItem>
                        <ListItemIcon>
                          <GroupIcon color="Primary" />
                        </ListItemIcon>
                        <ListItemText>Some tricking organization</ListItemText>
                      </ListItem>
                    ))}
                </List>
                {/* <Typography>Mapped Tricking Orgs</Typography>
                <Typography>Some Tricking Org</Typography>
                <Typography>Some organization</Typography>
                <Typography>Some organization</Typography>
                <Typography>Some organization</Typography> */}
              </CardContent>
            </Card>
            <Card>
              <CardHeader
                title={<Typography variant="h4">Past Gatherings</Typography>}
              />
              <Divider />
              <CardContent className={classes.list}>
                <List aria-label="Past gatherings">
                  {Array(5)
                    .fill()
                    .map(() => (
                      <ListItem>
                        <ListItemIcon>
                          <LocalAirportIcon color="primary" />
                        </ListItemIcon>
                        <ListItemText>A past gathering</ListItemText>
                      </ListItem>
                    ))}
                </List>
                {/* <Typography>Mapped Past Gatherings</Typography>
                <Typography>Some other thing</Typography>
                <Typography>Some other thing</Typography>
                <Typography>Some other thing</Typography>
                <Typography>Some other thing</Typography> */}
              </CardContent>
            </Card>
          </Grid>
          <Grid container item sm={8}>
            <Card className={classes.card}>
              <CardHeader
                title={<Typography variant="h4">Stickied Sampler</Typography>}
              />
              <CardContent>
                <Typography>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
                  velit odit sunt provident maiores, perferendis aliquam minus
                  fugit similique tempora animi consequatur ducimus repellendus
                  architecto molestias corporis officia consectetur! Odit! Nemo
                  dolore architecto eum eos fugiat ea aperiam impedit incidunt
                  quae, harum officiis praesentium neque exercitationem, earum
                  quibusdam, iusto adipisci eaque! Earum fugit nostrum officiis?
                  Sequi doloribus enim placeat velit.
                </Typography>
              </CardContent>
            </Card>
            <Card className={classes.card}>
              <CardHeader
                title={<Typography variant="h4">Recent Posts</Typography>}
              />
              <CardContent>
                <Typography>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
                  velit odit sunt provident maiores, perferendis aliquam minus
                  fugit similique tempora animi consequatur ducimus repellendus
                  architecto molestias corporis officia consectetur! Odit! Nemo
                  dolore architecto eum eos fugiat ea aperiam impedit incidunt
                  quae, harum officiis praesentium neque exercitationem, earum
                  quibusdam, iusto adipisci eaque! Earum fugit nostrum officiis?
                  Sequi doloribus enim placeat velit.
                </Typography>
              </CardContent>
            </Card>
            <Card className={classes.card}>
              <CardHeader
                title={<Typography variant="h4">Some post</Typography>}
              />
              <CardContent>
                <Typography>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
                  velit odit sunt provident maiores, perferendis aliquam minus
                  fugit similique tempora animi consequatur ducimus repellendus
                  architecto molestias corporis officia consectetur! Odit! Nemo
                  dolore architecto eum eos fugiat ea aperiam impedit incidunt
                  quae, harum officiis praesentium neque exercitationem, earum
                  quibusdam, iusto adipisci eaque! Earum fugit nostrum officiis?
                  Sequi doloribus enim placeat velit.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Fragment>
      ) : null}
    </Grid>
  );
};

// DummyProfileView.propTypes = {};

export default ProfileView;
