"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { MY_URL_STRAPI } from "@/lib/config"
import { useQuery } from "@tanstack/react-query"
import { JSX } from "react"

// Typdefinitionen
interface SponsorLogo {
  data: {
    attributes: {
      url: string
    }
  }
}

interface SponsorAttributes {
  Name: string
  Link: string
  Logo: SponsorLogo
}

interface Sponsor {
  attributes: SponsorAttributes
}

interface SponsorResponse {
  data: Sponsor[]
}

// API-Abruffunktion
const fetchSponsors = async (): Promise<SponsorResponse> => {
  const response = await fetch(`${MY_URL_STRAPI}/api/sponsorens?populate=*`)
  
  if (!response.ok) {
    throw new Error('Fehler beim Laden der Sponsorendaten')
  }
  
  return response.json()
}

const Sponsoren = (): JSX.Element => {
  // React Query Hook für Datenabruf
  const { 
    isLoading, 
    isError, 
    data, 
    error 
  } = useQuery<SponsorResponse, Error>({
    queryKey: ['sponsors'],
    queryFn: fetchSponsors
  })

  // Ladezustand
  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="animate-pulse text-xl font-medium">Sponsoren werden geladen...</div>
      </div>
    )
  }

  // Fehlerzustand
  if (isError) {
    return (
      <div className="flex justify-center items-center min-h-[400px] text-red-600">
        <div className="text-center p-4 border border-red-300 rounded-md bg-red-50">
          <p className="text-xl font-bold mb-2">Ein Fehler ist aufgetreten</p>
          <p>{error.message}</p>
        </div>
      </div>
    )
  }

  return (
    <section className="pt-20 bg-gradient-to-b from-blue-400 to-violet-500">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-6xl text-center font-bold text-white py-8 md:py-16">
          Unsere Sponsoren
        </h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 pb-16">
          {data?.data.map((sponsor, index) => (
            <div key={index} className="flex justify-center">
              <Card className="w-full max-w-xs transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <CardHeader className="pb-0 pt-4 px-4">
                  <h2 className="text-lg uppercase font-bold text-center truncate">
                    {sponsor.attributes.Name}
                  </h2>
                </CardHeader>
                
                <CardContent className="p-2">
                  <a 
                    href={sponsor.attributes.Link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block overflow-hidden rounded-lg"
                  >
                    <img 
                      className="h-40 w-full object-contain transition-transform duration-300 hover:scale-105" 
                      alt={`${sponsor.attributes.Name} Logo`} 
                      src={`${MY_URL_STRAPI}${sponsor.attributes.Logo.data.attributes.url}`}
                    />
                  </a>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Sponsoren