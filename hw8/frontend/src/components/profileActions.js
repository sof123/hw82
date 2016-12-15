import resource from '../actions'

const updateHeadlineAction = (newHeadline, ownProps) => (dispatch) => resource('PUT', 'headline', {
    headline: newHeadline
}).then(r => (dispatch({
    type: 'updateHeadlineToDo',
    id: ownProps.id,
    payload: r.headline
})))

export default updateHeadlineAction
