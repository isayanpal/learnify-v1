import React from "react";
import Markdown from "react-markdown";
import { Link } from "react-router-dom";

const Mongo = () => {
  const notes = `
**MongoDB**

MongoDB is a popular open-source, document-oriented NoSQL database that provides high performance, scalability, and flexibility for handling unstructured or semi-structured data. Here are some key notes on MongoDB:

1. **Document-Oriented**: MongoDB stores data in JSON-like documents, which makes it easy to represent hierarchical relationships and complex structures within a single record. Documents are stored in BSON (Binary JSON) format, which provides data types and structures for efficient storage and manipulation.

2. **Schema-less**: MongoDB is schema-less, meaning that documents in a collection do not need to have a predefined structure. This flexibility allows for easier data modeling and adaptation to changing requirements.

3. **High Performance**: MongoDB offers high performance for read and write operations due to its use of memory-mapped files and support for indexing. It also provides horizontal scalability through sharding, allowing it to handle large volumes of data and high throughput applications.

4. **Scalability**: MongoDB scales horizontally by distributing data across multiple servers using sharding. Sharding involves splitting data into chunks and distributing these chunks across multiple shards (database instances). This enables MongoDB to handle increasing data volumes and traffic by adding more shards to the cluster.

5. **Querying**: MongoDB supports a rich query language with support for complex queries, including range queries, regular expression searches, and geospatial queries. Queries can be performed using MongoDB's query language or through aggregation pipelines, which allow for advanced data processing and transformation.

6. **Replication**: MongoDB provides high availability and fault tolerance through replica sets. A replica set is a group of MongoDB instances that maintain the same data set, with one primary node that receives all write operations and multiple secondary nodes that replicate data from the primary. If the primary node fails, one of the secondary nodes automatically becomes the new primary, ensuring continuous availability.

7. **Flexible Data Model**: MongoDB's flexible data model allows for the storage of a wide variety of data types, including arrays, nested documents, and even binary data such as images or files. This makes MongoDB suitable for a wide range of use cases, from content management to real-time analytics.

8. **Community and Ecosystem**: MongoDB has a large and active community of developers and contributors, providing extensive documentation, tutorials, and support resources. Additionally, MongoDB offers official drivers and client libraries for a variety of programming languages, making it easy to integrate MongoDB into applications and ecosystems.

9. **Security**: MongoDB provides various security features, including authentication, authorization, encryption, and auditing. Users can define access control policies at the database, collection, or document level, ensuring that only authorized users have access to sensitive data.

10. **Aggregation Framework**: MongoDB's aggregation framework allows for complex data aggregation and analysis operations, including grouping, sorting, filtering, and projecting data. It provides a powerful and efficient way to perform analytics and generate insights from large datasets.

11. **Indexing**: MongoDB supports various types of indexes to improve query performance, including single-field indexes, compound indexes, multi-key indexes for arrays, geospatial indexes, and text indexes for full-text search. Indexes can significantly speed up query execution by allowing MongoDB to quickly locate and retrieve relevant documents.

12. **Atomic Operations**: MongoDB supports atomic operations on single documents, ensuring that each operation is either fully completed or not executed at all. This ensures data consistency and integrity, even in multi-user environments with concurrent access.

13. **Aggregation Pipeline**: MongoDB's aggregation pipeline allows for the processing of documents through a series of stages, where each stage performs a specific operation on the data. Stages can include filtering, sorting, grouping, and applying various aggregation functions, enabling complex data transformations and analysis.

14. **Change Streams**: MongoDB's change streams feature allows applications to subscribe to real-time changes in the database, such as insertions, updates, and deletions. Change streams provide a reliable and efficient way to implement reactive applications and trigger actions in response to database events.

15. **Transactions**: Starting from version 4.0, MongoDB supports multi-document transactions, allowing developers to perform multiple read and write operations on multiple documents within a single transaction. Transactions provide data consistency guarantees across multiple operations and support scenarios such as transferring funds between accounts or updating related documents atomically.

16. **Cloud Integration**: MongoDB offers integration with various cloud platforms, including MongoDB Atlas, a fully managed cloud database service provided by MongoDB, Inc. Atlas simplifies database management tasks such as provisioning, scaling, backup, and monitoring, allowing developers to focus on building applications without worrying about infrastructure management.

17. **Schema Validation**: While MongoDB is schema-less, it does offer schema validation capabilities to enforce data integrity and consistency. Schema validation allows developers to define rules for the structure and content of documents within a collection, ensuring that only valid data is inserted or updated.

18. **Geospatial Capabilities**: MongoDB provides robust support for geospatial data and queries, allowing developers to store and analyze spatial data such as points, lines, and polygons. MongoDB's geospatial indexes and query operators enable proximity searches, spatial joins, and other spatial operations.

19. **Text Search**: MongoDB includes a powerful text search feature that allows for full-text search across documents, including support for stemming, stop words, and relevance scoring. Text indexes can be created on one or more fields to enable efficient text search queries.

20. **Community Edition and Enterprise Edition**: MongoDB is available in two editions: Community Edition, which is free and open-source, and Enterprise Edition, which includes additional features such as advanced security, monitoring, and support options. Organizations can choose the edition that best suits their requirements and budget.

These additional features further enhance MongoDB's capabilities and make it a versatile choice for modern application development and data management tasks.

    `;
  return (
    <div className="mx-5 p-4 w-[1500px] flex flex-col cursor-pointer">
      <Link to="/topics/development">
        <div className="flex flex-row gap-[5px] items-center mb-5">
          <box-icon name="chevron-left"></box-icon>Back
        </div>
      </Link>
      <div>
        <Markdown className="font-medium">{notes}</Markdown>
      </div>
    </div>
  );
};

export default Mongo;
