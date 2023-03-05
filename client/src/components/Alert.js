import { Card, Modal, Button } from "flowbite-react";
import React from "react";





export default function Alertcomponent() {
  return (

    <>
      <React.Fragment>



        <Modal
          show={true}
          size="md"
          popup={true}

        >
          <Modal.Header />
          <Modal.Body>
            <div className="text-center">
              <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                Are Sure You want To Checkout
              </h3>
              <div className="flex justify-center gap-4">
                <Button href="/landingPage"
                  color="failure"
                >
                  Yes, I'm sure
                </Button>
                <Button href="/Cart"
                  color="gray"

                >
                  No, cancel
                </Button>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </React.Fragment>

    </>

  )
}