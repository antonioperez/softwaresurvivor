import ServiceHubPage from '@/components/ServiceHubPage'
import { softwareModernizationHub as hub } from '@/data/serviceHubData'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({
  title: hub.pageTitle,
  description: hub.description,
  canonical: hub.path,
  keywords: hub.keywords,
})

export default function SoftwareModernizationConsultingPage() {
  return <ServiceHubPage hub={hub} />
}
