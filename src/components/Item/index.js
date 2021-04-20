/* eslint-disable react/jsx-max-props-per-line */
/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import {
  Grid,
  Typography,
  Card,
  CardHeader,
  CardContent,
  Divider,
  Link,
  Button,
} from '@material-ui/core';

const Item = ({name, description, onClick}) => {
  return (
    <Grid item lg={12} md={12} xl={12} xs={12}>
      <Card>
        <CardHeader
          title={
            <Link component="button" onClick={onClick}>
              <Typography variant="h2">{name}</Typography>
            </Link>
          }
        />
        <CardContent>
          <Grid>
            <Typography>
              {description}
            </Typography>
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
};

Item.propTypes = {};

export default Item;
