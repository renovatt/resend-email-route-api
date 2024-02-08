import { FormSchemaType } from "@/schemas"

export const handleSendEmailByRouteApi = async (body: FormSchemaType) => {
  const data = await fetch('/api/send-email', {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify(body),
  })
  const response = await data.json()
  return response
}