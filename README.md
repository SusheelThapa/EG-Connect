<p>
    <h1 align="center">EG-Connect</h1>
    <p align="center">
        <img
             src="https://github.com/SusheelThapa/EG-Connect/assets/83917129/f7fa0bdc-c27a-473a-9df3-ab590e791ba4" alt="Logo of EG-Connect"
         />
    <p align="center">
    <strong>  </strong>
    </p>
</p>

## Table of Contents

1. [Introduction](#introduction)
2. [Features](#features)
3. [Installation](#installation)
4. [Usage](#usage)
5. [Contributing](#contributing)
6. [License](#license)

## Introduction

In response to the evolving dynamics of our digital society, EG-Connect emerges as a transformative force, heralding a new era of civic engagement. This visionary project goes beyond conventional platforms, aiming to cultivate a vibrant and informed citizenry. By providing a space for citizens to articulate their concerns, cast votes on pertinent issues, and contribute to the policymaking dialogue, the system becomes a cornerstone of a participatory democracy. It endeavors to not only enhance transparency but also fortify the very essence of accountability, creating a virtual agora where the collective voice of the people resonates. In essence, the EG-Connect is more than a technological marvel; it is a societal catalyst propelling us toward a future where the intersection of technology and governance ushers in a more interconnected, responsive, and egalitarian democracy.

## Features

### 1. Petition Submission

- Users can submit petitions on various issues.
- Petitions can include detailed descriptions, supporting documents, and relevant tags.

### 2. Petition Voting

- Public can vote on petitions to express support for specific issues.
- The system tracks and displays the number of votes for each petition.

### 3. Government Policy Upload

- Government officials can upload proposed policies for public review and feedback.
- Policies can be categorized, and summaries can be provided for better understanding.

### 4. User Authentication

- Secure user authentication system to ensure the integrity of the voting and feedback process.
- Encrypted user data for privacy protection.

## Installation

### Cloning the repository

- First of all, clone the repository as

  ```shell
  https://github.com/SusheelThapa/EG-Connect.git
  ```

### Frontend

#### Moving to frontend folder

    ```shell
    cd frontend/
    ```

#### Installation node packages

    ```shell
    cd yarn
    yarn
    ```

#### Running the project

    ```shell
    yarn run dev
    ```

### Backend

#### Moving to backend folder

    ```shell
    cd backend
    ```

#### Creating virtual environment

    ```shell
    python3 -m venv .venv
    ```

#### Activate the virtual environment

    ```shell
    source .venv/bin/activate
    ```

#### Installing required python packages

    ```shell
    pip3 install -r requirements.txt
    ```

#### Making migrations

    ```shell
    python3 manage.py makemigrations
    python3 manage.py migrate
    ```

#### Running the server

    ```shell
    python3 manage.py runserver
    ```

## Usage

1. Visit the application in your web browser.
2. Sign up for an account or log in if you already have one.
3. Explore petitions, vote, and submit your own petitions.
4. Review government policies and provide valuable feedback.

## Contributing

We welcome contributions to improve the E-Petition and Feedback System. To contribute, follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix: `git checkout -b feature-name`
3. Make your changes and commit them: `git commit -m "Description of changes"`
4. Push your changes to your fork: `git push origin feature-name`
5. Create a pull request to merge your changes into the main repository.

## License

This project is licensed under the [MIT License](LICENSE). Feel free to use, modify, and distribute the code for your own projects.

Thank you for using and contributing to the E-Petition and Feedback System! Together, let's build a more participatory and transparent society.

## 👨 Authors 👨

💻 [Susheel Thapa](https://github.com/SusheelThapa)

💻 [Rajendra Khanal](https://github.com/Rajendrakhanal)

💻 [Saurav Kumar Mahato](https://github.com/SauravKumarMahato)

💻 [Sandesh Pyakurel](https://github.com/Sandesh-Pyakurel)
