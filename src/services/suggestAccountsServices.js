import * as httpRequest from '~/utils/request'

export const suggestAccounts = async (q, per_page = 12) => {
    try {
        const res = await httpRequest.get('users/suggested', {
            params: {
                q,
                per_page,
            },
        })
        return res.data
    } catch (error) {
        console.log(error)
    }
}
