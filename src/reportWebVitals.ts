import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals'

type ReportHandler = (metric: {
  name: string
  value: number
  delta: number
  id: string
}) => void

const reportWebVitals = (onPerfEntry?: ReportHandler) => {
  if (onPerfEntry && typeof onPerfEntry === 'function') {
    getCLS(onPerfEntry)
    getFID(onPerfEntry)
    getFCP(onPerfEntry)
    getLCP(onPerfEntry)
    getTTFB(onPerfEntry)
  }
}

export default reportWebVitals
