import { PUBLIC_PIXEL } from '$env/static/public';
import { ACCESS_TOKEN, TEST_EVENT_CODE } from '$env/static/private';

export const sendEventToCapi = async (payload, platform) => {
    try {
        const body = new FormData()
        body.append('data', JSON.stringify(payload));
        body.append("access_token", ACCESS_TOKEN)
        TEST_EVENT_CODE && body.append("test_event_code", TEST_EVENT_CODE)

        const requestOptions = {
            method: "POST",
            body
        }

        const response = await fetch(`https://graph.facebook.com/v13.0/${PUBLIC_PIXEL}/events`, requestOptions)

        const logTxAPI = {
            response,
            payload,
            PUBLIC_PIXEL,
            TEST_EVENT_CODE

        }
        platform.env.LOGS && await platform.env.LOGS.put(payload[0].event_name + '_' + payload[0].event_id, JSON.stringify(logTxAPI))

        if (!response.ok) {
            const textError = await response.text()
            throw new Error(textError)
        } else {
            const capiResponse = await response.json()

            //response example: {"events_received":1,"messages":[],"fbtrace_id":"AlEbQv4iavf_SbArt9iFKA2"}
            return capiResponse
        }

    } catch (err) {
        return {
            error: err.name,
            message: err.message
        }

    }
}