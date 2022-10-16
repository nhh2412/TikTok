import * as httpRequest from '~/utils/httpRequest'

export const users = async (page, per_page = 10) => {
    try {
        const res = await httpRequest.get('users/suggested', {
            params: {
                page,
                per_page,
            },
        })
        return res.data
    } catch (error) {
        console.log(error)
    }
}
