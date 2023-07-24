import Footer from "../share/footer/Footer";
import Header from "../share/header/Header";
import React from 'react';

const Terms = () => {
    return (
        <div>
        <Header></Header>
        <div className="container mx-auto pb-24 pt-10 px-16">
  <h2 className="text-center text-teal-500 text-4xl font-bold pb-8">
    Terms and Conditions
  </h2>
  <p className="text-base">
    Welcome to PHeroCollege! By using our website, you agree to the following
    terms and conditions:
  </p>
  <br />
  <br />
  <p className="text-base">
    Content: All content on our website, including but not limited to course
    materials, images, videos, and articles, is the intellectual property of
    PHeroCollege and may not be reproduced or distributed without our written
    permission.
  </p>
  <br />
  <br />
  <p className="text-base">
    Accuracy: We make every effort to ensure the accuracy and completeness of
    our content, but we make no guarantees or warranties as to its accuracy or
    suitability for any particular purpose.
  </p>
  <br />
  <br />
  <p className="text-base">
    Liability: We are not liable for any damages or losses that may result from
    your use of our website, including but not limited to direct, indirect,
    consequential, or incidental damages.
  </p>
  <br />
  <br />
  <p className="text-base">
    User-generated content: Any content that you post or upload to our website,
    including comments, reviews, and ratings, must be your original work and
    must not infringe on any third-party rights. We reserve the right to remove
    any content that we deem inappropriate or offensive.
  </p>
  <br />
  <br />
  <p className="text-base">
    Privacy: We take your privacy seriously and will not share your personal
    information with third parties without your consent. Please see our Privacy
    Policy for more information.
  </p>
  <br />
  <br />
  <p className="text-base">
    Changes: We reserve the right to update or modify these terms and conditions
    at any time, without prior notice. By continuing to use our website, you
    agree to be bound by the updated terms and conditions.
  </p>
  <br />
  <br />
  <p className="text-base">
    If you have any questions or concerns about these terms and conditions,
    please contact us at support@pherocollege.com. Thank you for choosing
    PHeroCollege as your educational partner!
  </p>
</div>

        <Footer></Footer>
      </div>
    );
};

export default Terms;