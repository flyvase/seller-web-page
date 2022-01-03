import { ImageNotSupported, Link } from '@mui/icons-material';
import { Box, Skeleton, styled, Typography } from '@mui/material';
import React, { useContext } from 'react';

import { spaceRepositoryContext } from '../../../domain/repository/spaceRepository';
import { SpaceId } from '../../../domain/valueObject/spaceId';
import { useGetSpaceOgpProperties } from './spaceHooks';

type WebsiteDisplayProps = {
  spaceId: SpaceId;
};

const SectionTitle = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
}));

const TitleSpacer = styled(Box)(({ theme }) => ({
  width: theme.spacing(0.5),
}));

const ImageSpacer = styled(Box)(({ theme }) => ({
  height: theme.spacing(1),
  [theme.breakpoints.up('sm')]: {
    height: theme.spacing(2),
  },
}));

const ImageBox = styled(Box)(({ theme }) => ({
  width: '100%',
  aspectRatio: '2',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: theme.palette.divider,
}));

const WebsiteLink = styled('a')(() => ({
  width: '100%',
  height: '100%',
}));

const Image = styled('img')(() => ({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
}));

export const WebsiteDisplay: React.VFC<WebsiteDisplayProps> = (
  props: WebsiteDisplayProps
) => {
  const spaceRepository = useContext(spaceRepositoryContext);
  const { data, isLoading, isError } = useGetSpaceOgpProperties(
    props.spaceId,
    spaceRepository
  );

  return (
    <Box>
      <SectionTitle>
        <Link />
        <TitleSpacer />
        <Typography variant="h4">HP</Typography>
      </SectionTitle>
      <ImageSpacer />
      <ImageBox>
        {isLoading ? (
          <Skeleton />
        ) : isError || data!.images.length === 0 ? (
          <ImageNotSupported fontSize="large" />
        ) : (
          <WebsiteLink
            href={data!.url}
            target="_blank"
            rel="noreferrer noopener"
          >
            <Image src={data!.images[0].url} />
          </WebsiteLink>
        )}
      </ImageBox>
    </Box>
  );
};
