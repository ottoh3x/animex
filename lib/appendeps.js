export function appendMissingEpisodes(originalList, updatedEpisodes) {
    const existingIds = originalList.map(episode => episode.id);
    const missingEpisodes = updatedEpisodes.filter(episode => !existingIds.includes(episode.id));
  
    const mergedEpisodes = [...originalList, ...missingEpisodes];
    // If you need to sort the merged episodes based on episode number, you can do it here.
    // For example: mergedEpisodes.sort((a, b) => a.number - b.number);
  
    return mergedEpisodes;
  }