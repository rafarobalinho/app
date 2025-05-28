
export default {
    /*=============================================m_ÔÔ_m=============================================\
        WeWeb NcScale API
    \================================================================================================*/

    async sendLogToNcScale({message, severity, eventName, extraData, continueOnError}) {
        const pageInfo = wwLib.wwWebsiteData.getCurrentPage();
        const websiteName = await wwLib.wwWebsiteData.getWebsiteName();
        const pageName = pageInfo.name;
        let extra = extraData?.reduce((acc, data) => {
            acc[data.key] = data.value;
            return acc;
        }, {});

        extra = {...extra, "website_name": websiteName, "page_name": pageName,}

        try{
            await axios.post("https://logs.ncscale.io/v1/logs", {
                "token": this.settings.publicData.developerToken,
                "severity": severity || "info",
                "message": message || "",
                "event_name": eventName || "",
                "createdAt": parseInt(new Date().getTime() / 1000),
                "extra": extra
            });
        }catch(e){
            if (continueOnError === false) throw e
        }
    }
};
