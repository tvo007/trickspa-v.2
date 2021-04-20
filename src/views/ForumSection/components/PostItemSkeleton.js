import React from 'react';
// import PropTypes from 'prop-types';
import Skeleton from 'react-loading-skeleton';
import {
  Grid,

  Card,
  CardHeader,
  CardContent,
} from '@material-ui/core';

const PostItemSkeleton = props => {
  // For testing skeleton-loader

  return (
    <Grid item lg={12} md={12} xl={12} xs={12}>
      <Card>
        <CardHeader title={<Skeleton width={200} />} />
        <CardContent>
          <Grid>

            <Skeleton count={1} height={35} />

          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
};

// PostItemSkeleton.propTypes = {};

export default PostItemSkeleton;
