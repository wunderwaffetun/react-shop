import React from 'react'

export default function Footer() {
    return (
        <footer className="page-footer deep-purple lighten-3">
            <div className="container">
                <div className="row">
                    <div className="col l6 s12">
                        <h5 className="white-text">Footer Content</h5>
                        <p className="grey-text text-lighten-4">
                            This is a footer and i dont know what write here
                        </p>
                    </div>
                    <div className="col l4 offset-l2 s12">
                        <h5 className="white-text">Links</h5>
                    </div>
                </div>
            </div>
            <div className="footer-copyright">
                <div className="container">
                    © {new Date().getFullYear()} Copyright Text
                    <a className="grey-text text-lighten-4 right" href="#!">
                        More Links
                    </a>
                </div>
            </div>
        </footer>
    )
}