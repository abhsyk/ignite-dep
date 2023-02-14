import { GameType } from './types';

/* Get resized url of "background_image" */
export const smallImage = (
  imagePath: GameType['background_image'],
  size: number
) => {
  /* If imagePath is null */
  if (!imagePath) return;
  if (imagePath.match(/media\/screenshots/)) {
    return imagePath.replace(
      'media/screenshots',
      `media/resize/${size}/-/screenshots`
    );
  } else {
    return imagePath.replace('media/games', `media/resize/${size}/-/games`);
  }
};
