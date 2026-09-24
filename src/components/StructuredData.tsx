import {
    accountingServiceStructuredData,
    serializeStructuredData,
} from "../lib/seo"

export default function StructuredData() {
    return (
        <script
            id="accounting-service-schema"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
                __html: serializeStructuredData(accountingServiceStructuredData),
            }}
        />
    )
}
