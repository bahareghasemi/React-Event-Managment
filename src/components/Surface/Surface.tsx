'use client';

// import {
//   Box,
//   BoxProps,
//   createPolymorphicComponent,
//   PaperProps,
// } from '@mantine/core';
// import { forwardRef, ReactNode } from 'react';

// type SurfaceProps = { children: ReactNode } & BoxProps & PaperProps;

// const Surface = createPolymorphicComponent<'div', SurfaceProps>(
//   forwardRef<HTMLDivElement, SurfaceProps>(({ children, ...others }, ref) => (
//     <Box component="div" {...others} ref={ref}>
//       {children}
//     </Box>
//   ))
// );

// Surface.displayName = 'Surface';

// export default Surface;

import {
  Box,
  BoxProps,
  createPolymorphicComponent,
  PaperProps,
} from '@mantine/core';
import { forwardRef, ReactNode } from 'react';

type SurfaceProps = { children: ReactNode } & BoxProps & PaperProps;

const Surface = createPolymorphicComponent<'div', SurfaceProps>(
  forwardRef<HTMLDivElement, SurfaceProps>(function Surface(
    { children, ...others },
    ref,
  ) {
    return (
      <Box component="div" {...others} ref={ref}>
        {children}
      </Box>
    );
  }),
);

Surface.displayName = 'Surface';

export default Surface;
