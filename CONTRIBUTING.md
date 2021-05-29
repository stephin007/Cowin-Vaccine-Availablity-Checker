# Contribution Guide

<details>
  <summary>Issues</summary>
  <ul>
    <li>
      Make sure that there are no duplicate issues by first checking the
      <a
        href="https://github.com/stephin007/Cowin-Vaccine-Availablity-Checker/issues"
        >Issues</a
      >
      tab and that the issue that you've selected hasn't already been assigned or
      being worked on.
    </li>
    <li>
      The title should follow the following pattern:
      <code>[TYPE] &ltshort-description&gt</code>, where <code>TYPE</code> is one
      of <code>feat</code> | <code>fix</code> | <code>docs</code> |
      <code>build</code> | <code>ci/cd</code>
    </li>
    <li>
      Explain, in detail, what the issue is about and if it's a bug, add steps to
      reproduce it.
    </li>
  </ul>
</details>

<details>
  <summary>Branching</summary>
  <ul>
    <li>
      When creating branches, please use the following pattern:
      <code>type/issue-{issue-number}</code> (f.eg.: <code>feat/issue-12</code>,
      <code>fix/issue-87</code>)
    </li>
  </ul>
</details>

<details>
  <summary>Project Setup</summary>
  <ul>
    <li>
      Fork this repo and then clone the forked repo
      (<code>https://github.com/&ltyour-username&gt/Cowin-Vaccine-Availablity-Checker.git</code>)
    </li>
    <li>
      Run either <code>yarn</code> or <code>npm install</code> inside the root
      directory to install all the required dependencies(Please make sure to
      remove duplicate/redundant lockfiles)
    </li>
    <li>
      Scripts
      <ul>
        <li>
          <code>start</code>: Run the app in the development mode. Open
          http://localhost:3000 to view it in the browser. The page will reload
          if you make edits. You will also see any lint errors in the console.
        </li>
        <li>
          <code>build</code>: Builds the app for production to the
          <code>build</code> folder. It correctly bundles React in production
          mode and optimizes the build for the best performance. The build is
          minified and the filenames include the hashes. Your app is ready to be
          deployed! See the section about
          <a href="https://facebook.github.io/create-react-app/docs/deployment"
            >deployment</a
          >
          for more information.
        </li>
        <li>
          <code>eject</code>: <br /><i
            >Note: this is a one-way operation. Once you <code>eject</code>, you
            can’t go back!</i
          ><br />If you aren’t satisfied with the build tool and configuration
          choices, you can `eject` at any time. This command will remove the
          single build dependency from your project. Instead, it will copy all
          the configuration files and the transitive dependencies (webpack,
          Babel, ESLint, etc) right into your project so you have full control
          over them. All of the commands except `eject` will still work, but
          they will point to the copied scripts so you can tweak them. At this
          point you’re on your own. You don’t have to ever use `eject`. The
          curated feature set is suitable for small and middle deployments, and
          you shouldn’t feel obligated to use this feature. However we
          understand that this tool wouldn’t be useful if you couldn’t customize
          it when you are ready for it.
        </li>
        <li><code>test</code>: Run tests using Jest</li>
      </ul>
    </li>
  </ul>
</details>

<details>
  <summary>Environment Variables</summary>
  <ul>
    <li>
      <strong>REACT_APP_MAPBOX_ACCESS_TOKEN:</strong>
      <strong>Please make a copy of the `.env.example` and rename it to .env and place the below token in this `.env` file   </strong>
      <ul>
        <li>
          Create a MapBox account by navigating to
          <a href="https://account.mapbox.com/auth/signup">this link</a>
          <img
            src="https://user-images.githubusercontent.com/66718300/119947085-fc216e80-bfb4-11eb-9d49-322a3343d2b8.png"
            alt="image"
          />
        </li>
        <li>
          After creating and verifying the account, go to
          <a href="https://accoung.mapbox.com">https://accoung.mapbox.com</a>
          and copy the access token
          <img
            src="https://user-images.githubusercontent.com/66718300/119947810-c761e700-bfb5-11eb-8e32-23d1a535894f.png"
            alt="Screenshot from 2021-05-28 13-03-08"
          />
        </li>
      </ul>
    </li>
  </ul>
</details>
