import React, {Fragment} from 'react';
// import PropTypes from 'prop-types';
import PageHeading from '../../components/PageHeading';
import SectionItem from './components/SectionItem';
import SectionItemSkeleton from './components/SectionItemSkeleton';
//experiemental

import {
  Grid,
  // Typography,
  // Card,
  // CardHeader,
  // CardContent,
  // Divider,
} from '@material-ui/core';

const ForumsView = ({sections, isSectionLoading, error, history}) => {
  return (
    <Grid container spacing={4}>
      <Grid item xs={12}>
        <PageHeading title="Forums" />
      </Grid>

      <Grid container item spacing={4}>
        {isSectionLoading
          ? <Fragment>
              <SectionItemSkeleton />
              <SectionItemSkeleton />
              <SectionItemSkeleton />
              <SectionItemSkeleton />
              <SectionItemSkeleton />
            </Fragment>
          : sections.map (section => (
              <SectionItem
                description={section.description}
                isSectionLoading={isSectionLoading}
                key={section.id}
                name={section.name}
                onClick={e => history.push (`/forums/${section.slug}`)}
              />
            ))}

      </Grid>
    </Grid>
  );
};


// ForumsView.propTypes = {};

export default ForumsView;

/**
 * const ForumsView = ({sections, isSectionLoading, error, history}) => {
  return (
    <Grid container spacing={4}>
      <Grid item xs={12}>
        <PageHeading title="Forums" />
      </Grid>

      <Grid container item spacing={4}>
        {isSectionLoading
          ? <Fragment>
              <SectionItemSkeleton />
              <SectionItemSkeleton />
              <SectionItemSkeleton />
              <SectionItemSkeleton />
              <SectionItemSkeleton />
            </Fragment>
          : sections.map (section => (
              <SectionItem
                description={section.description}
                isSectionLoading={isSectionLoading}
                key={section.id}
                name={section.name}
                onClick={e => history.push (`/forums/${section.slug}`)}
              />
            ))}

      </Grid>
    </Grid>
  );
};
 */
