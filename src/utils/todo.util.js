export const onClickAddTodo = (history, match) => (e) => {
  history.push(`${match.url}/add`)
}