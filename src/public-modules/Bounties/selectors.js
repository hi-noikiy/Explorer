import { createSelector } from 'reselect';

const rootBountiesSelector = state => state.bounties;

export const bountiesSelector = createSelector(
  rootBountiesSelector,
  rootBounty => rootBounty.bounties
);

export const bountiesCountSelector = createSelector(
  rootBountiesSelector,
  rootBounty => rootBounty.count
);

export const bountiesStateSelector = createSelector(
  rootBountiesSelector,
  rootBounty => ({
    loading: rootBounty.loading,
    loaded: rootBounty.loaded,
    error: rootBounty.error
  })
);