export type AnalysisTotalTypes = {
    users: number
    downloadfiles: number
    uploadfiles: number
}

export type ScreenCount = {
    userNum: number
    uploadNum: number
    downloadNum: number
    keywordNum: number
}

export type ScreenUserRatio = {
    type: string
    count: number
}

export type ScreenDownload = {
    fileId: string
    count: number
}

export type ScreenUpload = {
    name: string
    condition: string
}