import React from 'react';
// import PropTypes from 'prop-types';
import Skeleton from 'react-loading-skeleton';
import {
  Grid,
  Typography,
  Card,
  CardHeader,
  CardContent,
  Link,
} from '@material-ui/core';

const PostItem = ({name, description, onClick, isSectionLoading}) => {
  // For testing skeleton-loader

  return (
    <Grid item lg={12} md={12} xl={12} xs={12}>
      <Card>
        <CardHeader
          title={
            isSectionLoading
              ? <Skeleton width={200} />
              : <Link component="button" onClick={onClick}>
                  <Typography variant="h2">{name}</Typography>
                </Link>
          }
        />
        <CardContent>
          <Grid>
            {isSectionLoading
              ? <Skeleton count={1} />
              : <Typography>
                  {description}
                </Typography>}
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
};

PostItem.propTypes = {};

export default PostItem;
