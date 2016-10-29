/* @flow */

import './styles.css';
import Layout from 'src/shared/layout';
import React from 'react';
import { Headline, Paragraph, Text } from 'src/shared/typography';
import { Link } from 'react-router';

const HOME = <Link to="/">https://www.remotestories.com</Link>;
const EMAIL = <a href="mailto:remotestories@ayrton.be">remotestories@ayrton.be</a>;

export default function Legal() {
  return (
    <Layout className="Legal">
      <Headline className="Legal-headline" component="h1">Terms of Use</Headline>

      <Text component="div" variant="light" className="Legal-terms">
        <Paragraph>
          Please read these Terms of Use ("Terms", "Terms of Use") carefully before using the {HOME} website (the "Service") operated by Remote Stories ("us", "we", or "our").
        </Paragraph>

        <Paragraph>
          Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users and others who access or use the Service.
        </Paragraph>

        <Paragraph>
          By accessing or using the Service you agree to be bound by these Terms. If you disagree with any part of the terms then you may not access the Service.
        </Paragraph>

        <Paragraph>
          {HOME} and the related apps are intend to be used by remote workers to share "stories" related to remote work.
        </Paragraph>

        <Paragraph>
          <Text variant="regular">Links To Other Web Sites</Text><br />
          Our Service may contain links to third-party web sites or services that are not owned or controlled by Remote Stories.
        </Paragraph>

        <Paragraph>
          Remote Stories has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third party web sites or services. You further acknowledge and agree that Remote Stories shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with use of or reliance on any such content, goods or services available on or through any such web sites or services.
        </Paragraph>

        <Paragraph>
          We strongly advise you to read the terms and conditions and privacy policies of any third-party web sites or services that you visit.
        </Paragraph>

        <Paragraph>
          <Text variant="regular">Your account</Text><br />
          If you use Remote Stories or the related apps, you are responsible for maintaining the confidentiality of your account and for restricting access to your computer, and you agree to accept responsibility for all activities that occur under your account. You may not assign or otherwise transfer your account to any other person or entity. You acknowledge that Remote Stories is not responsible for third party access to your account that results from theft or misappropriation of your account. Remote Stories and its associates reserve the right to refuse or cancel service, terminate accounts, or remove or edit content in our sole discretion.
        </Paragraph>

        <Paragraph>
          Remote Stories does not knowingly collect, either online or offline, personal information from persons under the age of thirteen. If you are under 18, you may use {HOME} only with permission of a parent or guardian.
        </Paragraph>

        <Paragraph>
          <Text variant="regular">Termination</Text><br />
          We may terminate or suspend access to our Service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
        </Paragraph>

        <Paragraph>
          All provisions of the Terms which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity and limitations of liability.
        </Paragraph>

        <Paragraph>
          <Text variant="regular">Governing Law</Text><br />
          These Terms shall be governed and construed in accordance with the laws of Belgium, without regard to its conflict of law provisions.
        </Paragraph>

        <Paragraph>
          Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect. These Terms constitute the entire agreement between us regarding our Service, and supersede and replace any prior agreements we might have between us regarding the Service.
        </Paragraph>

        <Paragraph>
          <Text variant="regular">No unlawful or prohibited use/Intellectual Property</Text><br />
          All content included as part of the Service, such as text, graphics, logos, images, as well as the compilation thereof, and any software used on the Site, is the property of Remote Stories or its suppliers and protected by copyright and other laws that protect intellectual property and proprietary rights. You agree to observe and abide by all copyright and other proprietary notices, legends or other restrictions contained in any such content and will not make any changes thereto.
        </Paragraph>

        <Paragraph>
          <Text variant="regular">Changes</Text><br />
          We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will try to provide at least 30 days notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
        </Paragraph>

        <Paragraph>
          By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, please stop using the Service.
        </Paragraph>

        <Paragraph>
          <Text variant="regular">Contact Us</Text><br />
          If you have any questions about these Terms, please contact us: {EMAIL}
        </Paragraph>
      </Text>

      <Headline className="Legal-headline" component="h2">Privacy Policy</Headline>

      <Text component="div" variant="light">
        <Paragraph>
          This Privacy Policy governs the manner in which Remote Stories collects, uses, maintains and discloses information collected from users (each, a "User") of the {HOME} website ("Site"). This privacy policy applies to the Site and all products and services offered by Remote Stories.
        </Paragraph>

        <Paragraph>
          <Text variant="regular">Personal identification information</Text><br />
          We may collect personal identification information from Users in a variety of ways, including, but not limited to, when Users visit our site, fill out a form, and in connection with other activities, services, features or resources we make available on our Site. Users may visit our Site anonymously. We will collect personal identification information from Users only if they voluntarily submit such information to us. Users can always refuse to supply personally identification information, except that it may prevent them from engaging in certain Site related activities.
        </Paragraph>

        <Paragraph>
          <Text variant="regular">Log Data</Text><br />
          We collect information that your browser sends whenever you visit the Site ("Log Data"). This Log Data may include information such as your computer’s Internet Protocol ("IP") address, browser type, browser version, the pages of the Site that you visit, the time and date of your visit, the time spent on those pages and other statistics.
        </Paragraph>

        <Paragraph>
          <Text variant="regular">Web browser cookies</Text><br />
          Our Site may use "cookies" to enhance User experience. User’s web browser places cookies on their hard drive for record-keeping purposes and sometimes to track information about them. User may choose to set their web browser to refuse cookies, or to alert you when cookies are being sent. If they do so, note that some parts of the Site may not function properly.
        </Paragraph>

        <Paragraph>
          <Text variant="regular">How we use collected information</Text><br />
          Remote Stories may collect and use Users personal information for the following purposes:
        </Paragraph>

        <Paragraph>
          - To personalize user experience<br />
          We may use information in the aggregate to understand how our Users as a group use the services and resources provided on our Site.<br />
          - To improve the Site<br />
          We may use feedback you provide to improve our products and services.<br />
          - Security<br />
          The security of your Personal Information is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Information, we cannot guarantee its absolute security.
        </Paragraph>

        <Paragraph>
          <Text variant="regular">Sharing your personal information</Text><br />
          We do not sell, trade, or rent Users personal identification information to others. We may share generic aggregated demographic information not linked to any personal identification information regarding visitors and users with our business partners, trusted affiliates and advertisers for the purposes outlined above.
        </Paragraph>

        <Paragraph>
          <Text variant="regular">Links To Other Sites</Text><br />
          The Site may contain links to other sites that are not operated by us. If you click on a third party link, you will be directed to that third party’s site. We strongly advise you to review the Privacy Policy of every site you visit.
        </Paragraph>

        <Paragraph>
          We have no control over, and assume no responsibility for the content, privacy policies or practices of any third party sites or services.
        </Paragraph>

        <Paragraph>
          <Text variant="regular">Advertising</Text><br />
          Ads appearing on our site may be delivered to Users by advertising partners, who may set cookies. These cookies allow the ad server to recognize your computer each time they send you an online advertisement to compile non personal identification information about you or others who use your computer. This information allows ad networks to, among other things, deliver targeted advertisements that they believe will be of most interest to you. This privacy policy does not cover the use of cookies by any advertisers.
        </Paragraph>

        <Paragraph>
          <Text variant="regular">Google Adsense</Text><br />
          Some of the ads may be served by Google. Google’s use of the DART cookie enables it to serve ads to Users based on their visit to our Site and other sites on the Internet. DART uses "non personally identifiable information" and does NOT track personal information about you, such as your name, email address, physical address, etc. You may opt out of the use of the DART cookie by visiting the Google ad and content network privacy policy at <a href="http://www.google.com/privacy_ads.html">http://www.google.com/privacy_ads.html</a>
        </Paragraph>

        <Paragraph>
          <Text variant="regular">Changes to this privacy policy</Text><br />
          Remote Stories has the discretion to update this privacy policy at any time. When we do, we will revise the updated date at the bottom of this page. We encourage Users to frequently check this page for any changes to stay informed about how we are helping to protect the personal information we collect. You acknowledge and agree that it is your responsibility to review this privacy policy periodically and become aware of modifications.
        </Paragraph>

        <Paragraph>
          <Text variant="regular">Children’s Privacy</Text><br />
          The Site does not address anyone under the age of 13 ("Children").
        </Paragraph>

        <Paragraph>
          We do not knowingly collect personally identifiable information from children under 13. If you are a parent or guardian and you are aware that your Children has provided us with Personal Information, please contact us. If we discover that a Children under 13 has provided us with Personal Information, we will delete such information from our servers immediately.
        </Paragraph>

        <Paragraph>
          <Text variant="regular">Your acceptance of these terms</Text><br />
          By using this Site, you signify your acceptance of this policy and terms of service. If you do not agree to this policy, please do not use our Site. Your continued use of the Site following the posting of changes to this policy will be deemed your acceptance of those changes.
        </Paragraph>

        <Paragraph>
          <Text variant="regular">Contacting us</Text><br />
          If you have any questions about this Privacy Policy, the practices of this site, or your dealings with this site, please contact us at:<br />
        </Paragraph>

        <Paragraph>
          Remote Stories<br />
          {HOME}<br />
          {EMAIL}
        </Paragraph>
      </Text>
    </Layout>
  );
}
