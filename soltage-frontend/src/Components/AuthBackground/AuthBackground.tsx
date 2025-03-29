import { ReactNode } from "react"
import "./AuthBackground.scss"

export default function AuthBackground({children}: {children: ReactNode}) {
  return (
    <>
    <div className="background-setup">
      <div className="dummy-text">
        <div className="text-header">
        Welcome to the Soltage Nexus Mangement Platform
        </div>

        <div className="text-content">
        The Nexus platform provides a central point of connection and collaboration for Soltage's portfolio of projects.
        </div>
        </div>
        <div className="children-form-container"> {children}</div>
        </div>
        
    </>
  )
}
