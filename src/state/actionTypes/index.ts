export enum ActionType {
  /* Games */
  FETCH_GAMES = 'fetch_games',
  FETCH_GAMES_COMPLETE = 'fetch_games_complete',
  FETCH_GAMES_ERROR = 'fetch_games_error',
  CLEAR_SEARCHED = 'clear_searched',
  SET_SEARCH_WORD = 'set_search_word',
  /* Paginate */
  SET_PAGE = 'set_page',
  /* Game Details */
  GET_DETAILS = 'get_details',
  GET_DETAILS_COMPLETE = 'get_details_complete',
  GET_DETAILS_ERROR = 'get_details_error',
}
