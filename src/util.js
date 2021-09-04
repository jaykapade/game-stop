//Resize Media
export const resizeImage = (imagePath, size) => {
  if (imagePath != null) {
    const image = imagePath.match(/media\/screenshots/)
      ? imagePath.replace(
          'media/screenshots',
          `media/resize/${size}/-/screenshots`,
        )
      : imagePath.replace('media/games/', `media/resize/${size}/-/games/`)
    return image
  }
  const image = 'https://via.placeholder.com/1280x720?text=No+Image+Found'
  return image
}
