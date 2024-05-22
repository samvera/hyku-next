import Container from "@/components/layout/container";
import Header from "@/components/layout/header";
import Implementations from "@/components/features/implementations";
import MainWrapper from "@/components/layout/main-wrapper";
import PageHeader from "@/components/page-header";

export default async function FeaturesPage() {
  return (
    <div className="">
      <Header />
      <MainWrapper>
        <PageHeader
          title="Features and Implementations"
          description="Hyku began as the Hydra-in-a-Box project. Based on Hyrax, it offers an easy-to-install, easy-to-configure, feature-rich solution supporting next-generation web technologies. Hyku reduces barriers to effective asset management and preservation for collections and content types of many kinds, and is supported by a vibrant and ever-growing open source community."
        />
        <Container>
          <h2>Features</h2>

          <p>
            Building on Hyrax, Hyku has a long list of features and
            distinctions, including:
          </p>
          <ul>
            <li>
              Multi-tenancy, or the ability to host multiple repository “slices”
              within the same application, each with its own users, objects, and
              look & feel
            </li>
            <li>Support for the IIIF Image and Presentation APIs</li>
            <li>
              Support for harvesting metadata and content via ResourceSync
            </li>
            <li>Rich object viewing using the Universal Viewer</li>
            <li>
              Two bundled work types: Image Work and Generic Work and more!
            </li>
          </ul>
          <section className="space-y-6">
            <div>
              <h3>Hyku Beta 2.0.0</h3>
              <p>
                Hyku Beta 2.0.0 was released in October 2018 and Hyku was
                promoted out of Samvera Labs in February 2019. Information about
                the initial Beta Test can be found below and user documentation
                is being added to this site regularly.
              </p>
            </div>
            <div>
              <h3>Hyku 3.0</h3>
              <p>
                Hyku 3.0 was released in early 2021, bringing Hyku up to speed
                with Hyrax, and introducing new theming and other
                configurations.
              </p>
            </div>
            <div>
              <h3>Hyku 4.0</h3>
              <p>
                Hyku 4.0 was released in May 2022, offering several major new
                features including cross-tenant search, three new UI theming
                templates that can be implemented from the Admin appearance
                dashboard, the ability to make tenants private, to feature
                collections, and to support multiple domains per tenant.
              </p>
            </div>
            <div>
              <h3>Hyku 5.0</h3>
              <p>
                Hyku 5.0 was released in February 2023, offering the ability to
                use Solr graph queries to skip having to do nested indexing.
                Features include Groups with Roles and the ability to implement
                Google or Motomo analytics.
              </p>
            </div>
            <p>
              Visit the Hyku YouTube Channel for feature demos and the latest
              updates.
            </p>
          </section>

          <section className="pt-20">
            <h2>Implementations</h2>
            <Implementations />
          </section>
        </Container>
      </MainWrapper>
    </div>
  );
}
