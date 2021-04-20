import React from 'react';
// import PropTypes from 'prop-types';
import Skeleton from 'react-loading-skeleton';
import {
  Grid,

  Card,
  CardHeader,
  CardContent,

} from '@material-ui/core';

const SectionItemSkeleton = ({duration}) => {
  // For testing skeleton-loader
  return (
    <Grid item lg={12} md={12} xl={12} xs={12}>
      <Card>
        <CardHeader title={<Skeleton width={150} duration={duration}/>} />
        <CardContent>
          <Grid>
            <Skeleton width={200} duration={duration}/>
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
};

// SectionItemSkeleton.propTypes = {};

export default SectionItemSkeleton;
