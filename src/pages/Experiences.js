import React from 'react'
import './Experiences.css'

function Experiences() {
   return (
      <div className="experiences">
         <div>
            <h4 className="company">Benq</h4>
            <h5>Developer</h5>
            <h5>May - August 2019 & January - May 2020</h5>
            <ul>
               <li>Dramatically improved the Quality Assurance department's velocity by creating a Chrome exetension to streamline error reports from the Mantis bug tracking tool</li>
               <li>Enabled the marketing team to quickly address user feedback by enchancing thes coial media marketing tool, Mention, to retrieive, analyze, and categorize user feedback on BenQ products</li>
               <li>Facilitated analysis of marketing campaign success by automating user data transfer from Eloqua Marketing Campaigns for integration with Salesforce data</li>
               <li>Prototyped stream broadcasting systems using experiemental technologies(WebRTC, Socket.io, etc.) to test feasibility of content broadcasting products</li>
               <li>Implemented China-compliant web analytics tools, enabling successful user tracking of consumers located in China</li>
            </ul>
         </div>
         <div>
            <h4 className="company">Newtopia</h4>
            <h5>Jr. Developer</h5>
            <h5>September - December 2018</h5>
            <ul>
               <li>Designed, created, and implemented a log using Redux, leading to more powerful error handling, as well as delivering beneficial information to user engagement</li>
               <li>Refactored the mobile app's endpoint to be more efficient, gearing it with better compatibility to logging, as well as adding proper JSDoc documentation</li>
               <li>Wrote unit tests using Jest, improving code coverage from 80% to 90% of the entire code base</li>
               <li>Routinely fixed critical bugs, including forking third-party open source dependencies and editing/contributing to their code</li>
            </ul>
         </div>
         <p>
            <h4 className="company">Pixelbot</h4>
            <h5>Jr. Developer</h5>
            <h5>January - March 2018</h5>
            <ul>
               <li>Operated efficiently within a high-intensity start-up using agile methodologies and 2-week sprints, delivering significant code contributions to core project functionality</li>
               <li>Collaborated with World Wildlife Fund (WWF) to develop a React-based, social media hub promoting environmental awareness</li>
               <li>Employed IP detection to customize links and site language based on country origin</li>
               <li>Utilized APIs from Facebook and Twitter to integrate social media capabilities within the website</li>
            </ul>
         </p>
      </div>
   )
}

export default Experiences;
