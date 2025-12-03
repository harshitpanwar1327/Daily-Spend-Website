import Footer from "../components/Footer"

const TermsAndConditions = () => {
  return (
    <div className="flex flex-col w-screen min-h-screen overflow-y-auto">
      <div className="w-full bg-gradient-to-r from-orange-100 via-orange-200 to-orange-300 py-30 text-center flex flex-col gap-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Terms of Use</h2>
      </div>

      <div className="px-6 md:px-12 py-12 text-gray-600 flex flex-col gap-8">
        <p className="font-semibold">Welcome to Daily Spend, a flagship mobile application operated by Daily Spend (hereinafter referred to as the "company").</p>

        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-semibold text-black">1. ACCEPTANCE OF TERMS OF USE</h2>
          <p>These terms of use (Terms) constitute a legally binding agreement between User or you (as defined below) and the Company regarding your use of Daily Spend Application. "User" or "You" means any person who access or use the Daily Spend Applications for the purpose of tracking the Income & expenses, sharing, transacting, displaying or uploading information. By accessing Daily Spend Application and/or by clicking "I agree", you agree to be bound by these Terms. You hereby represent and warrant to the Company that you are at least are capable of entering, performing and adhering to these Terms and that you agree to be bound by the following terms and conditions.</p>
          
          <p>The Company reserves the right, at its discretion, to change, modify, add, or remove portions of these Terms at any time by posting the amended Terms. Please check these Terms periodically for changes. Your continued use of the Daily Spend after the posting of changes constitutes your binding acceptance of such changes. In addition, when using any particular services, you may be subject to any posted guidelines or rules applicable to such services. All such guidelines or rules are hereby incorporated by reference into the Terms.</p>

          <p>If you would like to use Daily Spends, you must accept the provisions of this Terms of Use. If you do not agree with the Terms, please do not use the Daily Spend App.</p>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-semibold text-black">2. DAILY SPEND, REGISTRATION AND ACCESS TO USE</h2>
          <ul className="list-disc list-outside pl-6 space-y-2 text-gray-700">
            <li><strong>Registration:</strong> To register for the Daily Spend you will be required to sign-up an account by completing the registration process (i.e. by providing us with current, complete and accurate information as prompted by the applicable registration form). If you register using your email address, You also will choose a password and a user name. You are entirely responsible for maintaining the confidentiality of your password and account. You expressly agree to absolve the Company and/or the Daily Spend of any responsibility / liability in this regard.</li>
            <li><strong>Facebook Connect:</strong> You may also register for the Daily Spend by using your Facebook username and password. Company is using only email, name and birthday from the facebook login information. When you use this feature, you expressly consent to information about your activity on the Daily Spend. If user want to delete the account/data then user can write us on support@dailyspend.in</li>
            <li className="space-y-2">
              <p><strong>Access to use:</strong> To access the Daily Spend, you will be asked to enter your individual user name and password, as chosen by you during your registration. Therefore, the Company does not permit any of the following:-</p>
              <ul className="list-disc list-outside pl-6 space-y-2 text-gray-700">
                <li>Any other person sharing your account and Password;</li>
                <li>Any part of the App being cached in proxy servers and accessed by individuals who have not registered with the Company as users of the App; or</li>
                <li>Access through a single account and Password being made available to multiple users on a network.</li>
              </ul>
              <p>If the Company reasonably believes that an account and password is being used / misused in any manner, the Company shall reserve the right to cancel access rights immediately without notice, and block access to all users from that IP address. Furthermore, you shall be entirely responsible for any and all activities that occur under your account. You agree to notify the Company immediately of any unauthorized use of your account or any other breach of security. The Company will not be liable for any loss that you may incur as a result of someone else using your password or account, however, you could be held liable for losses incurred by the Company or another party due to someone else using your account or password.</p>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-semibold text-black">3. INTELLECTUAL PROPERTY RIGHTS</h2>
          <ul className="list-disc list-outside pl-6 space-y-2 text-gray-700">
            <li><strong>Grant the Right:</strong> Subject to the terms of this Service Agreement: (a) We grant You a non-exclusive, non-transferable, worldwide right during the term of the Service Agreement to access and use the Service solely for your internal business or commercial purposes as contemplated by this Service Agreement; and (b) You hereby give Us a non-exclusive, worldwide right (i) to use Your Data as necessary to provide the Service, and (ii) to create aggregated or redacted forms of Your Data that do not identify You or any users of an Account so as to enable us to provide the Services. . This permission also extends to trusted third parties we work with to provide the Services, for example our storage space and receipt and invoice data extraction; and (c) We warrant that as a course of business expensemanager has entered into confidentiality agreements with its trusted third parties that it works with to provide Services. Use Restriction Except as expressly permitted under this Agreement, You shall not do any of the following: (a) sell, distribute, sublicense, broadcast, or commercially exploit Our Property or any rights under the Agreement, including without limitation any access or use of Our Property on a software bureau basis or for any Customer processing software (such as for any third parties on a rental or sharing basis); (b) introduce any infringing, obscene, libelous, or otherwise unlawful data or material into the Software; (c) copy, modify, or prepare derivative works based on Our Property; (d) reverse engineer, decompile, disassemble, or attempt to derive source code from Our Property ; or (e) remove, obscure, or alter any intellectual property right or confidentiality notices or legends appearing in or on any aspect of any Our Property.le.</li>
            <li><strong>The Ownership:</strong> We own and retain all right, title, and interest in and to Our Property provided by Us in connection with the Software; (b) all ideas, know-how, and techniques that may be developed, conceived, or invented by Us during its performance under this Agreement. You own and retains all right, title, and interest in and to Your Data and all intellectual property rights therein.</li>
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-semibold text-black">4. ADVERTISING MATERIAL</h2>
          <p>Part of the Daily Spend or the Daily Spend may contain advertising information or promotion material or other material submitted to the Company by third parties. Responsibility for ensuring that material submitted for inclusion on the Daily Spend complies with applicable international and national law is exclusively on the party providing the information/material. Your correspondence or business dealings with, or participation in promotions of advertisers including payment and delivery of related goods or services, and any other terms, conditions, warranties or representations associated with such dealings, are solely between you and such advertiser. Before relying on any advertising material, you should independently verify its relevance for your purpose, and should obtain appropriate professional advice. The Company shall not be responsible nor liable for any loss or claim that you may have against an advertiser or any consequential damages arising on account of your relying on the contents of the advertisement.</p>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-semibold text-black">5. COLLECTION AND USE OF PERSONAL INFORMATION</h2>
          <p>For information about the Company´s policies and practices regarding the collection and use of your personally identifiable information, please read the Privacy Policy as available on the Daily Spend Application. The Privacy Policy is incorporated by reference and made part of these Terms. Thus, by agreeing to these Terms, you agree that your presence on the Daily Spend and use of the Daily Spend are governed by the Company’s Privacy Policy in effect at the time of your use.</p>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-semibold text-black">6. DISCLAIMER OF WARRANTIES AND LIABILITY</h2>
          <p>Each party represents, warrants, and covenants to the other party that: (a) it has the authority to enter into this Agreement, to grant the rights granted by it under this Agreement, and to perform its obligations under this Agreement; (b) it will comply with all applicable laws and regulations that may be in effect during the term of this Agreement as they apply under this Agreement; and (c) Your Data and Software, and the use thereof, does not and will not infringe, or constitute an infringement or misappropriation of, any intellectual property rights, privacy rights or other proprietary rights of a third party or breach the terms of any agreement . We warrant that we have all intellectual property rights and authorisations required from any person to provide You with the Software and we will indemnify You in respect of any claims for breach of intellectual property rights against you resulting from Your use of the Software in accordance with the terms of this Agreement.</p>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-semibold text-black">7. TERMINATION OF ACCOUNT</h2>
          <p>The Company reserves the right to change, suspend, or discontinue temporarily or permanently, some or all of the Daily Spend (including the Content and the devices through which the Daily Spend are accessed), with respect to any or all users, at any time without notice. You acknowledge that the Company may do so in its sole discretion. You also agree that the Company will not be liable to you for any modification, suspension, or discontinuance of the Daily Spend, although if you are a Daily Spends paid subscriber and the Company suspends or discontinues the Daily Spend, the Company may, in its sole discretion, provide you with a credit, refund, discount or other form of consideration (for example, the Company may credit additional days of service to your account). However, if the Company terminates your account or suspends or discontinues your access to the Daily Spend Service due to your violation of these Terms, then you will not be eligible for any such credit, refund, discount or other consideration.</p>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-semibold text-black">8. GENERAL TERMS</h2>
          <ul className="list-disc list-outside pl-6 space-y-2 text-gray-700">
            <li>
              <strong>Support & Contacting Us</strong>
              <p className="text-red-500">support@dailyspend.in</p>
            </li>
            <li>
              <strong>Relationship</strong>
              <p>We and You are independent contractors and this Agreement will not establish any relationship of partnership, joint venture, employment, franchise, or agency between us.</p>
            </li>
            <li>
              <strong>Assignment</strong>
              <p>Neither party may assign or transfer this Agreement without the prior written consent of the other party, and any attempted assignment without such consent will be void.</p>
            </li>
            <li>
              <strong>Applicable Law</strong>
              <p>These Terms are governed by and construed in accordance with, the laws of India without giving effect to principles of conflict of law. In the event of any dispute or claim by you against the Company, you agree to submit to the exclusive jurisdiction of courts at New Delhi.</p>
            </li>
            <li>
              <strong>Non Waiver</strong>
              <p>Any express waiver or failure to exercise promptly any right under this agreement will not create a continuing waiver or any expectation of non-enforcement.</p>
            </li>
            <li>
              <strong>Disclaimer</strong>
              <p>Daily Spend Application allow the User(s) to store and analyse their expenses. Company not going to use any personal information of the user outside of the platform.</p>
            </li>
            <li>
              <strong>Entire Agreement</strong>
              <p>These Terms constitute the entire agreement between the parties with respect to the subject matter hereof and supersedes and replaces all prior or contemporaneous understandings or agreements, written or oral, regarding such subject matter.</p>
            </li>
          </ul>
        </div>

        <div className="flex flex-col text-sm">
          <p>Copyright Notice</p>
          <p>© Daily Spend 2022. All Rights reserved.</p>
          <p>This disclaimer/terms of service notification is subject to change without notice.</p>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default TermsAndConditions